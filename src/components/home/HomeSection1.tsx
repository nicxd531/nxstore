"use client"
import React from "react";
import { Paper ,Box, Button, Typography, Avatar} from "@mui/material";

function HomeSection1() {
    const [selected,setSelected]= 
    React.useState(0)
  const options = [
    "Automobiles",
    "Clothes and wears",
    "Home interiors",
    "Computer and tech",
    "Tools and equipments",
    "Sport and outdoor ",
    "Animal and pets",
    "Machinery and tools",
    "More Categories",
  ];
  return (
    <Paper
      sx={{
        width: { xs: "100%", lg: "87%" },
        mx: { lg: 10 },
        height: { xs: "220px", lg: "400px" },
        mt: 2,
        display:"flex",
        p:{lg:1},
        justifyContent:"space-between"
      }}
    >
        <Box sx={{width:"19%",display:{xs:"none",lg:"flex"},flexDirection:"column",justifyContent:"space-around",height:"100%",alignItems:"start"}}>
            {options.map((data,index)=><Button  onClick={()=>setSelected(index)}  sx={{width:"100%",display:"flex",justifyContent:"start",bgcolor:`${selected == index ?  "#E3F0FF":"transparent"}`,color:`${selected == index ?  "black":"inherit"}`}} key={index}> {data}</Button>)}
        </Box>
        <Box sx={{width:{xs:"100%",lg:"60%",borderRadius:"5px"},position:"relative"}}>
            <img src="./images/homepage 1 banner.png" style={{width:"100%",height:"100%",borderRadius:"5px",objectFit:"cover"}}/>
            <Box sx={{position:"absolute",display:"flex",flexDirection:"column",top:50,left:50}} >
                <Typography sx={{fontSize:{xs:"1.5rem",lg:"1.9rem"}}}>Latest trending</Typography>
                <Typography  sx={{fontSize:{xs:"1.9rem",lg:"2.4rem"}, fontWeight:"bold"}}>Electronic items</Typography>
                <Button sx={{width:"fit-content"}} variant="contained">Learn more</Button>
            </Box>
        </Box>
        <Box sx={{width:"19%",display:{xs:"none",lg:"flex"},flexDirection:"column",justifyContent:"space-around",height:"100%",alignItems:"start"}}>
           <Paper sx={{width:"100%",height:"38%",bgcolor:"secondary.light",display:"flex",flexDirection:"column",p:1}}>
            <Box sx={{display:"flex",flexDirection:"row",mb:2,color:"black"}}>
                <Avatar sx={{mr:2}}/> 
                <Typography sx={{width:"60%",fontSize:"1.3rem",color:"black"}}>Hi, user let’s get stated</Typography>
            </Box>
            <Button variant="contained" sx={{mb:1,bgcolor:"secondary.main"}}>Join now</Button>
            <Button  variant="contained">Log in</Button>
           </Paper>
           <Paper sx={{width:"100%",height:"28%",bgcolor:"#F38332",p:3,color:"white"}}>
            <Typography  sx={{fontSize:"1.5rem",color:"white",fontWeight:"bold"}}>Get US $10 off with a new supplier</Typography>
           </Paper>
           <Paper sx={{width:"100%",height:"28%",bgcolor:"#55BDC3",p:3,display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>
           <Typography sx={{fontSize:"1.5rem",color:"white",fontWeight:"bold"}}>Send quotes with supplier preferences</Typography>
           </Paper>
        </Box>

    </Paper>
  );
}

export default HomeSection1;
