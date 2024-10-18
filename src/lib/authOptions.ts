import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "./db-connect";
import User from "@/models/Users";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        try {
          dbConnect();
          const user = await User.findOne({ email: credentials?.email });
          // confirm user is available
          if (!user) {
            throw "user not found";
          }
          const bcrypt = require("bcrypt");
          const isMatched = await bcrypt.compare(
            credentials?.password,
            user?.password
          );
          if (user && isMatched) {
            return {
              id: user?._id,
              email: user?.email,
            } 
          }else if(!isMatched){
            // return null
            throw "Email or Password incorrect";
          }
        } catch (error) {
          console.log("credentials", credentials);
          throw new Error(error)
        }
        return null;
      },
    }),
  ],
};
