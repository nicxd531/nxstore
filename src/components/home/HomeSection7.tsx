"use client"
import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import extraServices from "../../data/extraSevercies.json";
import SearchIcon from "@mui/icons-material/Search";
import InventoryIcon from "@mui/icons-material/Inventory";
import SendIcon from "@mui/icons-material/Send";
import SecurityIcon from "@mui/icons-material/Security";
import sendTheme from "@/zustand/sendTheme";


function HomeSection7() {
  const {selectedTheme}=sendTheme()
  return (
    <Box
      sx={{
        height: { lg: "256px" },
        width: { xs: "100%", lg: "87%" },
        mx: { lg: 10 },
        mt: 2,
        p:{xs:2,lg:0} 
      }}
    >
      <Box sx={{  height:"10%",mb:{xs:1,lg:2}}}>
        <Typography sx={{fontSize:"1.5rem",fontWeight:"bold"}}>Our extra services</Typography>
      </Box>
      <Box sx={{ height: "90%", display: "flex",justifyContent:"space-between",flexDirection:{xs:"column",lg:"row"}}}>
        {extraServices.map((data, index) => {
          const { icon } = data;
          let iconM;
          if (icon == "search") {
            iconM = <SearchIcon  sx={{color:"black",width:{xs:"30px",lg:"20px"},height:{xs:"30px",lg:"20px"}}}/>;
          } else if (icon == "order") {
            iconM = <InventoryIcon  sx={{color:"black",width:{xs:"30px",lg:"20px"},height:{xs:"30px",lg:"20px"}}} />;
          } else if (icon == "send") {
            iconM = <SendIcon  sx={{color:"black",width:{xs:"30px",lg:"20px"},height:{xs:"30px",lg:"20px"}}} />;
          } else if (icon == "shield") {
            iconM = <SecurityIcon  sx={{color:"black",width:{xs:"30px",lg:"20px"},height:{xs:"30px",lg:"20px"}}} />;
          }

          return (
            <Paper sx={{width:{xs:"100%",lg:"24%"},height:"220px",position:"relative",mt:{xs:2,lg:0}}} key={index}>
              <Box sx={{height:"70%"}}>
                <img src={data.image} alt="regioin categories image"  style={{height:"100%",width:"100%",objectFit:"cover"}}/>
              </Box>
                <IconButton sx={{ bgcolor: "#D1E7FF",position:"absolute",top:{xs:130,lg:135},right:40,border:"3px solid white" , borderColor:`${selectedTheme== "light"?"#EFF2F4":"#121212"}`,color:`${selectedTheme== "light"?"#121212":"#EFF2F4"}`}}>
                  {iconM}
                </IconButton>
              <Box sx={{minHeight:"30%",display:"flex",alignItems:"center",p:1}}>
                <Typography sx={{fontSize:"1.1rem",fontWeight:"bold",width:"60%"}}>{data.info}</Typography>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
}

export default HomeSection7;
