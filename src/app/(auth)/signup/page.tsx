import MainPage from "@/components/auth/signup/MainPage";
import Slider from "@/components/auth/Slider";
import { Box, Stack } from "@mui/material";
import React from "react";

function page() {
  const images =[ "/images/signup1.jpg","/images/signup2.jpg", "/images/signup3.jpg","/images/signup4.jpg","/images/signup5.jpg","/images/signup6.jpg"]

  return (
    <Stack direction="row" sx={{ width: "100%",height:"110vh" ,py:6,px:10,bgcolor:"#8B96A5"}}>
      <MainPage />
      <Slider images={images}/>
    </Stack>
  );
}

export default page;
