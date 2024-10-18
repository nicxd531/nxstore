import { NextResponse } from "next/server";
import { registerT } from "../../../../utils/types";
import { createUser } from "../../../../utils/types";
import { dbConnect } from "@/lib/db-connect";
import User from "../../../../models/Users";
import { errorHandler, responseHandler } from "@/utils/resolver";


export async function POST(request: createUser) {

  try {
    const bcrypt = require("bcrypt");
    await dbConnect();
    const body = await request.json();
    const existingUser = await User.findOne({$or:[
      {number:body?.number},
      {email:body?.email},
      {userName:body?.userName}
    ]})
    console.log(existingUser)
    
    if(existingUser){
      const {number, email, userName}=body
      const error =existingUser
      let field
      if(existingUser.email === email) field ="email"
      if(existingUser.number === number)field ="number"
      if(existingUser.userName === userName)field ="usermame"
      const message =`${field} already exist`
    
      return NextResponse.json(errorHandler({error,message}), { status: 201 });
    }
    delete body.confirmPassword;
    const hashPassword = await bcrypt.hash(body?.password, 8);
    const newUser = new User({
      ...body,
      password: hashPassword,
    });
    const savedUser = await newUser.save();
    if (savedUser) {
      const userDoc = savedUser?._doc;
      delete userDoc.password;
      const data = userDoc
      const message ="account created "
      return NextResponse.json(responseHandler({data,message}), { status: 201 });
    }
  } catch (error: any) {
    console.log({ error });
    const message ="internal server error"
    return NextResponse.json(
      errorHandler({error,message}),
      { status: 500 }
    );
  }
}
