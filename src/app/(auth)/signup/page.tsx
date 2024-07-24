import Slider from '@/components/auth/signup/slider'
import MainPage from '@/components/productDetails/MainPage'
import { Box } from '@mui/material'
import React from 'react'


function page() {
  return (
    <Box sx={{width:"100%"}}>
      <MainPage/>
      {/* <Slider/> */}
    </Box>
  )
}

export default page