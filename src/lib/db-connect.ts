import { errorHandler } from "@/utils/resolver";
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
            const promise =mongoose.connect( process.env.DATABASE_URI as string,{
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
    }catch(error){
        const message =-"failed to connect to database"
        return errorHandler({error,message})
    }
}