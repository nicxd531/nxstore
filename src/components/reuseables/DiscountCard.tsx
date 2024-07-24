import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

function DiscountCard() {
  return (
    <Box sx={{ width: "100%", height: {xs:"100px",lg:"120px"},position:"relative" ,mt:3, borderRadius:3,mb:6}}>
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover",borderRadius:"12px" }}
        src="/images/discount image.png"
        alt="discount image"
      />
      <Stack sx={{position:"absolute",top:{xs:10,lg:40},width:"100%",px:5}} direction={{xs:"column",lg:"row"}} flexWrap="wrap" justifyContent="space-between">
        <Box sx={{color:"white",textAlign:{xs:"center",lg:"start"}}}>
          <Typography sx={{fontSize:{xs:"1rem",lg:"1.3rem"}, fontWeight:"bold"}}>Super discount on more than 100 USD</Typography>
          <Typography sx={{fontWeight:{xs:"0.9rem",lg:"1rem"}}}>Have you ever finally just write dummy info</Typography>
        </Box>

        <Button sx={{ bgcolor: "#FF9017",px:1,fontSize:"1.1rem" }}>Shop now</Button>
      </Stack>
    </Box>
  );
}

export default DiscountCard;
