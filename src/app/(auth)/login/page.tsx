import React from 'react'
import { Box, Stack } from "@mui/material";
import Slider from "@/components/auth/Slider";
import MainPage from "@/components/auth/login/MainPage";


function page() {
  const images =["/images/loginImage1.jpg","/images/loginImage2.jpg", "/images/loginImage3.jpg","/images/loginImage4.jpg","/images/loginImage5.jpg","/images/loginImage6.jpg"]

  return (
    <Stack direction="row" sx={{ width: "100%",height:"110vh" ,py:6,px:10,bgcolor:"#8B96A5"}}>
      <Slider images={images}/>
      <MainPage/>
    </Stack>
  )
}

export default page