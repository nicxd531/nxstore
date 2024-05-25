"use client";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { Form } from "react-bootstrap";
import Section1Sub1 from "./Section1Sub1";
import Section1Sub2 from "./Section1Sub2";
import sendTheme from "@/zustand/sendTheme";

function FooterSection2() {
  const{selectedTheme}=sendTheme()

  return (
    <Box >
      <Box sx={{ width: "100%", px: {xs:0,lg:8},display:"flex",flexDirection:{xs:"column",lg:"row"},mt:2 }}>
       <Section1Sub1/>
       <Section1Sub2/>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: `${selectedTheme == "light"?"#EFF2F4":"#212529"}`,
          minHeight: "68px",
          px:{xs:1,lg:8}
        }}
      >
        <Typography sx={{ color: "black"}}>© 2023 Ecommerce. </Typography>
        <Form.Select
          aria-label="Default select example"
          style={{
            fontSize: "1rem",
            backgroundColor: "transparent",
            border: "none",
            color: `${selectedTheme == "dark" ? "white" : "black"}`,
            marginRight: "15px",
            padding: "5px",
            maxWidth: "110px",
          }}
        >
          <option style={{ color:`${selectedTheme == "dark" ? "white" : "black"}` }} value="usd">
            English, USD
          </option>
          <option style={{ color: `${selectedTheme == "dark" ? "white" : "black"}` }} value="eur">
            French, EUR
          </option>
          <option style={{ color: `${selectedTheme == "dark" ? "white" : "black"}` }} value="jpy">
            Japanese, JPY
          </option>
          <option style={{ color: `${selectedTheme == "dark" ? "white" : "black"}` }} value="inr">
            Hindi, INR
          </option>
        </Form.Select>
      </Box>
    </Box>
  );
}

export default FooterSection2;
