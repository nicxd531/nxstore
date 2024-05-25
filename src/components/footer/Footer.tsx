"use client"
import { Box } from "@mui/material";
import React from "react";
import FooterSection1 from "./FooterSection1";
import FooterSection2 from "./FooterSection2";

function Footer() {
  return (
    <Box
      sx={{
        mt: 3,
        
      }}
    >
        <FooterSection1 />
        <FooterSection2/>
    </Box>
  );
}

export default Footer;
