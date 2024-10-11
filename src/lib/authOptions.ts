import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import  CredentialsProvider from "next-auth/providers/credentials";
import { createUser } from "@/utils/types";

export const authOptions : NextAuthOptions={
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string ,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
          }),
          FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID  as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET  as string
          }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID  as string,
            clientSecret: process.env.TWITTER_CLIENT_SECRET  as string
          }),
          CredentialsProvider({
          name: "credentials",
          credentials:{
            email:"",
            password:""
          },
          async authorize(credentials,req){
            return null
          }
        })
    ]
}
