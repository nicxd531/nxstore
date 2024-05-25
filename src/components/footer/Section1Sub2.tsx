import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Section1Sub2() {
  const about = ["About Us", "Find store", "Categories", "Blogs"];
  const partnership = ["About Us", "Find store", "Categories", "Blogs"];
  const information = ["Help Center", "Money Refund", "Shipping", "Contact us"];
  const forUsers = ["Login", "Register", "Settings", "My Orders"];
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" ,width:{xs:"100%",lg:"65%"},mt:{xs:2,lg:0},flexWrap:{xs:"wrap",lg:"nowrap"}}}>
      <Box>
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          About
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: {xs:"center",lg:"start" }}}
        >
          {about.map((data, index) => {
            return (
              <IconButton
                sx={{ borderRadius: 0, textAlign: "start", fontSize: "1.2rem", fontWeight: "bold" }}
                key={index}
              >
                {" "}
                {data}
              </IconButton>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          Partnership
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: {xs:"center",lg:"start" } }}
        >
          {partnership.map((data, index) => {
            return (
              <IconButton
                sx={{ borderRadius: 0, textAlign: "start", fontSize: "1.2rem", fontWeight: "bold" }}
                key={index}
              >
                {" "}
                {data}
              </IconButton>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          Information
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: {xs:"center",lg:"start" }}}
        >
          {information.map((data, index) => {
            return (
              <IconButton
                sx={{ borderRadius: 0, textAlign: "start", fontSize: "1.2rem", fontWeight: "bold" }}
                key={index}
              >
                {" "}
                {data}
              </IconButton>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          For users
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: {xs:"center",lg:"start" }}}
        >
          {forUsers.map((data, index) => {
            return (
              <IconButton
                sx={{ borderRadius: 0, textAlign: "start", fontSize: "1.2rem" , fontWeight: "bold"}}
                key={index}
              >
                {" "}
                {data}
              </IconButton>
            );
          })}
        </Box>
      </Box>
      <Box sx={{
              flex:{xs:" 1 0 100%",lg:"0"},
              width: {xs:"100%",lg:"fit-content"}
        }}
        >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 2,
            fontSize: {xs:"1.5rem",lg:"1.2rem"},
          }}
        >
          Get app
        </Typography>
        <Box sx={{display:"flex",flexDrirection:{xs:"row",lg:"column"},alignItems:{xs:"center"},width:{xs:"100%",lg:"fit-content"},justifyContent:"space-around"}}>
          <Box sx={{ width: "100px", mb: 2 ,mr:{xs:0,lg:1}}}>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src="/images/apple btn.png"
              alt="social icon"
            />
          </Box>
          <Box sx={{ width: "100px", mb: 2 }}>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src="/images/google btn.png"
              alt="social icon"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Section1Sub2;
