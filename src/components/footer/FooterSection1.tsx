"use client"
import React from "react";
import { Box, Typography ,FormControl,InputAdornment,InputLabel,OutlinedInput,IconButton, Button} from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import sendTheme from "@/zustand/sendTheme";

function FooterSection1() {
  const {selectedTheme}=sendTheme()
  return (
    <Box
      sx={{
        bgcolor: `${selectedTheme == "light"?"#EFF2F4":"#212529"}`,
        width: "100%",
        height: "190px",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        color:`${selectedTheme == "light"?"black":"white"}`
      }}
    >
      <Typography sx={{fontSize:"1.7rem",fontWeight:"bold"}}>Subscribe on our newsletter</Typography>
      <Typography sx={{fontSize:"0.9rem",textAlign:"center"}}>
        Get daily news on upcoming offers from many suppliers all over the world
      </Typography>
      <Box 
      sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        mt:2
      }}
      >
        <FormControl sx={{  width: {xs:"200px",lg:"250px"} ,p:0,color:`${selectedTheme == "light"?"black":"white"}`,borderColor:`${selectedTheme == "light"?"black":"white"}`,backgroundColor:`${selectedTheme == "light"?"white":"black"}`}} variant="outlined">
          <InputLabel  htmlFor="outlined-adornment-email">
            Email
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text" 
            sx={{color:'black',borderColor:"black"}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                 
                >
                    <MailOutlineIcon/>
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" sx={{bgcolor:"secondary.main",ml:{xs:1,lg:2},px:{xs:1,lg:3}}}>Subscribe</Button>
      </Box>
    </Box>
  );
}

export default FooterSection1;
