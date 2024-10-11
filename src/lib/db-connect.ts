import { errorhandler } from "@/utils/resolver";
import mongoose from "mongoose";
//windows is available in browser 
//like window we have global variable ini node emvironment 

global.mongoose={
    conn: null,
    promise:null
}


export async function dbConnect(){
    try{

        if (global.mongoose && global.mongoose.conn){
            console.log("using existing mongoose connection");
            return global.mongoose.conn;
        }else{
            console.log("initialising new mongoose connection 1");
            // const password =process.env.MONGODB_PASSWORD
            // const user =process.env.MONGODB_USER
            // const conString=`mongodb+srv://nxnews-user:${password}@cluster0.ih3hi45.mongodb.net/${user}?retryWrites=true&w=majority&appName=Cluster0`
            const conString= "mongodb://localhost:27017/nxStore"
            const promise =mongoose.connect(conString,{
                autoIndex:true
            }).then(mongoose=>mongoose);
            console.log("initialising new mongoose connection2");
            global.mongoose={
                conn:await promise,
                promise
            }
            console.log("initialising new mongoose connection3");

            return await promise
        }
    }catch(err){
        console.log({err})
        return errorhandler(err, 24)
    }
}