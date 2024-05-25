"use client";
import React from "react";
import { Box, Paper, Button, Typography, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

function Categories() {
  const options = [
    { name: "Automobiles", link: "/categories/automobile", image: "/images/automobile.png" },
    { name: "Clothes and wears", link: "/categories/clothesAndWears", image: "/images/clothing2.png" },
    { name: "Home interiors", link: "/categories/homeInteriors", image: "/images/interior.png" },
    { name: "Computer and tech", link: "/categories/computerAndTech", image: "/images/computer.png" },
    { name: "Tools and equipments", link: "/categories/toolsAndEquipments", image: "/images/tools.png" },
    { name: "Sport and outdoor ", link: "/categories/sportsAndOutdoor", image: "/images/outdoor.png" },
    { name: "Animal and pets", link: "/categories/machineryAndTools", image: "/images/pets.png" },
    { name: "Machinery and tools", link: "/categories/automobile", image: "/images/machinery.png" },
  ];
  const wide = {};

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        
      }}
    >
      <Box sx={{display :"flex",flexDirection:"row",width:"100%",flexWrap:"wrap"}}>
        {options.map((data, index) => {
          return (
            <IconButton
              key={index}
              sx={{width:"20%",height:"150px"}}
            >
              <Link href={data.link} style={{width:"100%",height:'100%'}}>
                <Paper
                sx={{width:"100%",height:"100%"}}
                >
                  <Box
                  sx={{width:"100%",height:"80%"}}
                  >
                    <img
                   
                    style={{ width: "100%", height: "100%" ,objectFit:"contain"}}
                    src={data.image}
                    alt="category icon"
                    />
                  </Box>
                  <Typography sx={{fontSize:"1.2rem",fontWeight:"bold"}}>{data.name}</Typography>
                </Paper>
              </Link>
            </IconButton>
          );
        })}
      </Box>
    </Box>
  );
}

export default Categories;
