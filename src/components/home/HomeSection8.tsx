import { Typography, Box } from "@mui/material";
import suppliersRegion from "../../data/suppliersRegion.json";
import React from "react";

function HomeSection8() {
  return (
    <Box
      sx={{
        height: { lg: "256px" },
        width: { xs: "100%", lg: "87%" },
        mx: { lg: 10 },
        mt: 3,
        p: { xs: 2, lg: 0 },
      }}
    >
      <Box>
        <Typography sx={{fontSize:"1.5rem",fontWeight:"bold"}}>Suppliers by region</Typography>
      </Box>
      <Box sx={{ display: "flex",flexWrap:"wrap" ,justifyContent:"space-between",mt:1}}>
        {suppliersRegion.map((data, index) => {
          return <Box key={index} sx={{ width: {xs:"48%",lg:"20%"} ,display:"flex",mt:2}}>
              <Box sx={{width:"30%"}}>
                <img alt="suppliers region image" src={data.image} style={{width:"70%"}} />
              </Box>
              <Box sx={{width:"70%"}} >
                <Typography sx={{fontSize:{xs:"1rem",lg:"1.2rem"},fontWeight:"bold"}}>{data.name}</Typography>
                <Typography className="text-muted" sx={{fontSize:"0.9rem"}}>{data.address}</Typography>
              </Box>
            </Box>
         
        })}
      </Box>
    </Box>
  );
}

export default HomeSection8;
