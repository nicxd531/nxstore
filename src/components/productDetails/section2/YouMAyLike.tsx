import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import data from "../../../data/clothing.json";

function YouMAyLike() {
  return (
    <Paper sx={{ width: {xs:"100%",lg:"20%"},display:{xs:"none",lg:"block"} }}>
      <Typography sx={{fontWeight:"bold",fontSize:"1.2rem",mt:1,ml:1}}>You may like</Typography>
      {data.map((data, index) => {
        return (
          <Stack
            sx={{ mt: 2 ,width:"100%"}}
            justifyContent="space-between"
            direction={"row"}
            key={index}
          >
            <IconButton sx={{width:"100%",borderRadius:0}}>
              <Box
                sx={{
                  width: "30%",
                  border: "1px solid  #E0E0E0",
                  borderRadius: 1,
                  p: "6px",
                }}
              >
                <img
                  alt="cloth image"
                  src={data.image}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
              <Box sx={{ width: "65%" ,ml:1}}>
                <Typography sx={{ fontWeight: "bold",textAlign:"start" }}>{data.name}</Typography>
                <Typography sx={{ color: "#8B96A5" ,textAlign:"start"}}>
                  {data.priceRange}
                </Typography>
              </Box>
            </IconButton>
          </Stack>
        );
      })}
    </Paper>
  );
}

export default YouMAyLike;
