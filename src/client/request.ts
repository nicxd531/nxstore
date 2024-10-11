import { errorhandler, responsehandler } from "@/utils/resolver"
import { baseUrlDev } from "./config"
import axios from "axios"
import { registerT } from "@/utils/types"

// register method 


export const RegisterHandler= async(payload:registerT)=>{
    console.log("het",payload.number)
    try{
      const res = await axios.post(baseUrlDev + "/auth/register",{payload});
      const data= res.data
      const responseType ="response"
     return responsehandler({data,responseType})

    }catch(error){
        const errorType = "catch error "
        return errorhandler({error,errorType})
    }
    
}
