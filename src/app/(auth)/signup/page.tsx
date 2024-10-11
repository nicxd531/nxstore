import MainPage from "@/components/auth/signup/MainPage";
import Slider from "@/components/auth/Slider";
import { authOptions } from "@/lib/authOptions";
import { Box, Stack } from "@mui/material";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async()=> {
  const session = await getServerSession(authOptions)
  if(session){
    redirect("/")
  }
  const images =[ "/images/signup1.jpg","/images/signup2.jpg", "/images/signup3.jpg","/images/signup4.jpg","/images/signup5.jpg","/images/signup6.jpg"]
  return (
    <Stack direction="row" sx={{ width: "100%",height:{xs:"80vh",lg:"110vh"} ,py:{xs:3,lg:6},px:{xs:1,lg:10},bgcolor:"#8B96A5"}}>
      <MainPage />
      <Slider images={images}/>
    </Stack>
  );
}

export default page;
