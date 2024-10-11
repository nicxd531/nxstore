import React from 'react'
import { Box, Stack } from "@mui/material";
import Slider from "@/components/auth/Slider";
import MainPage from "@/components/auth/login/MainPage";


function page() {
  const images =["/images/loginImage1.jpg","/images/loginImage2.jpg", "/images/loginImage3.jpg","/images/loginImage4.jpg","/images/loginImage5.jpg","/images/loginImage6.jpg"]

  return (
    <Stack direction="row" sx={{ width: "100%",height:{xs:"80vh",lg:"110vh"} ,py:{xs:3,lg:6},px:{xs:1,lg:10},bgcolor:"#8B96A5"}}>
      <Slider images={images}/>
      <MainPage/>
    </Stack>
  )
}

export default page