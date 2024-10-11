// type fro error handler 
export type errorHandlerT = {
    error?:any;
    errorType:string ;

}


// type for firstWordExtractor
 export type firstWordExtractorT ={
    str: string 
 }
// type for truncateText
 export type truncateTextT ={
    text: string ;
    maxLength: number ;
 }

//  types for register 
export type registerT={
   number?:string;
   surName?:string;
   firstName?:string;
   userName?:string;
   email?:string;
   Address1?:string;
   Address2?:string;
   password?:string;
   confirmPassword?:string;
}

export type responseHandlerT ={
   data:any;
   responseType : string;
}

export interface createUser extends Request{
   number?:string;
   surName:string;
   firstName:string;
   userName:string;
   email:string;
   Address1:string;
   Address2:string;
   password:string;
   confirmPassword:string;
} 