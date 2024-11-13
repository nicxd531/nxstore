import React from 'react'
import { Box, Stack } from "@mui/material";
import Slider from "@/components/auth/Slider";
import MainPage from "@/components/auth/login/MainPage";
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from "next/navigation";
import UnAuthourized from '@/components/reuseables/UnAuthourized';


const page= async ()=> {
  const session = await getServerSession(authOptions)
  if(session){
    redirect("/")
    return <UnAuthourized/>
  }
  const images =["/nxstore/loginImage1.jpg","/nxstore/loginImage2.jpg", "/nxstore/loginImage3.jpg","/nxstore/loginImage4.jpg","/nxstore/loginImage5.jpg","/nxstore/loginImage6.jpg"]

  return (
    <Stack direction="row" sx={{ width: "100%",height:{xs:"80vh",lg:"110vh"} ,py:{xs:3,lg:6},px:{xs:1,lg:10},bgcolor:"#8B96A5"}}>
      <Slider images={images}/>
      <MainPage/>
    </Stack>
  )
}

export default page