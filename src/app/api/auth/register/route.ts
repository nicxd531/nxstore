import { NextResponse } from "next/server";
import { registerT } from "../../../../utils/types";
import { createUser } from "../../../../utils/types";
import { dbConnect } from "@/lib/db-connect";
import User from "../../../../models/Users"



export async function POST(request: createUser) {
  const bcrypt =require("bcrypt")
  await dbConnect()
  try {
     const {
      number,
      surName,
      firstName,
      userName,
      email,
      Address1,
      Address2,
      password,
      confirmPassword,
    }= < registerT> await request.json();


    const hashedPassword = await bcrypt.hash("hello",10)

    // const newUser = new User({
    //   number,
    //   surName,
    //   firstName,
    //   userName,
    //   email,
    //   Address1,
    //   Address2,
    //   hashedPassword,
    // })
    // const savedUser = await newUser.save()

    console.log({   number,
      surName,
      firstName,
      userName,
      email,
      Address1,
      Address2,
      password,
      confirmPassword})
    
    return NextResponse.json({success:"account created"},{status:201})
  } catch (error: any) {
    console.log({ error });
    return NextResponse.json({error:"internal server error"},{status:500})
  }
}
