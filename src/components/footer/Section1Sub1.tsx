import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";

function Section1Sub1() {
  return (
    <Box sx={{ width: {xs:"100%",lg:"35%"},display:"flex",alignItems:{xs:"center",lg:"start"},flexDirection:"column",mt:{xs:2,lg:0} }}>
      <Box sx={{ width: "150px", mb: 3 }}>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="company logo"
          src="/images/logo-colored.png"
        />
      </Box>
      <Typography sx={{ mb: 2, fontSize: "1.2rem", width: {xs:"100%",lg:"80%"},textAlign:{xs:"center",lg:"start"} }}>
        Best information about the company gies here but now lorem ipsum is
      </Typography>
      <Box sx={{ display: "flex" }}>
        <IconButton
          sx={{
            bgcolor: "#EFF2F4",
            height: "34px",
            width: "34px",
            position: "relative",
            mr: 1,
          }}
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/images/facebook3.png"
            alt="social icon"
          />
        </IconButton>
        <IconButton
          sx={{ bgcolor: "#EFF2F4", height: "34px", width: "34px", mr: 1 }}
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/images/Fill 184.png"
            alt="social icon"
          />
        </IconButton>
        <IconButton
          sx={{ bgcolor: "#EFF2F4", height: "34px", width: "34px", mr: 1 }}
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/images/linkedin3.png"
            alt="social icon"
          />
        </IconButton>
        <IconButton
          sx={{ bgcolor: "#EFF2F4", height: "34px", width: "34px", mr: 1 }}
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            src="/images/instagram3.png"
            alt="social icon"
          />
        </IconButton>
        <IconButton
          sx={{ bgcolor: "#EFF2F4", height: "34px", width: "34px", mr: 1 }}
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/images/youtube3.png"
            alt="social icon"
          />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Section1Sub1;
