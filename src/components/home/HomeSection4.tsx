"use client"
import React from "react";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import consumerElectronicsAndGadgets from "../../data/consumerElectronicsAndGadgets.json";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import sendTheme from "@/zustand/sendTheme";

function HomeSection4() {
  const {selectedTheme}=sendTheme()
  return (
    <Paper
      sx={{
        width: { xs: "100%", lg: "87%" },
        mx: { lg: 10 },
        height: {  lg: "257px" },
        minHeight:{xs: "270px"},
        mt: 2,
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      <Box
        sx={{
          width: { lg: "23%" },
          height: "100%",
          position: "relative",
          display: { xs: "none", lg: "block" },
        }}
      >
        <img
          src="/images/cover image 2.png"
          alt="cover image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          className="bg-transparent1"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            p: 3,
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: "1.4rem", width: "70%" }}
          >
            {" "}
            Consumer electronics and gadgets
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              fontWeight: "bold",
              textTransform: "capitalize",
              fontSize: "0.9rem",
            }}
          >
            Source now
          </Button>
        </Box>
      </Box>

      <Typography sx={{ display: { xs: "block", lg: "none" }, height: "51px",fontSize:"1.9rem",p:1,fontWeight:"bold" ,ml:2,pt:2}}>
        Consumer electronics
      </Typography>
      <Box
        className="scroll-bar"
        sx={{
          width: { xs: "100%", lg: "77%" },
          overflowX: { xs: "auto", lg: "none" },
          whiteSpace: { xs: "nowrap", lg: "wrap" },
          minHeight: { xs: "80%", lg: "fit-content" },
        }}
      >
        {consumerElectronicsAndGadgets.map((data, index) => {
          return (
            <IconButton
              sx={{
                borderRadius: 0,
                width: { xs: "140px", lg: "25%" },
                border: "1px solid",
                borderColor:`${selectedTheme== "light"?"#EFF2F4":"#121212"}`,
                height: { xs: "160px", lg: "50%" },
                p: 1,
                display: "inline-flex",
                flexDirection: { xs: "column-reverse", lg: "row" },
                flexGrow: 0,
              }}
              key={index}
            >
              <Box sx={{ width: { xs: "100%", lg: "70%" } ,mt:{xs:1,lg:0}}}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    textAlign: { xs: "center", lg: "start" },
                    mb: { lg: 2 },
                    fontSize: "1.2rem",
                    
                  }}
                >
                  {data.title}
                </Typography>
                <Typography
                  sx={{
                    width: { xs: "100%", lg: "50%" },
                    textAlign: { xs: "center", lg: "start" },
                    fontSize: "1rem",
                  }}
                >
                  from
                  <br /> USD {data.statingPrice}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", lg: "30%" },
                  height: { xs: "60%", lg: "fit-content" },
                }}
              >
                <img
                  src={data.image}
                  alt="category image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </IconButton>
          );
        })}
      </Box>
      <IconButton sx={{   width:"fit-content", borderRadius:0,display: { xs: "flex", lg: "none" }, height: "10%" ,textAlign:"start",ml:2,color:"secondary.main",justifyContent:"flex-start",fontWeight:"bold",pt:2}}>
       <Typography sx={{fontSize:"1.4rem",}}>Source now</Typography> 
        <ArrowForwardIcon sx={{width:"28px",height:"24px"}}/>
      </IconButton>
    </Paper>
  );
}

export default HomeSection4;
