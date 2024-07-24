import { Paper, Stack, Typography, Box, IconButton } from "@mui/material";
import data from "../../data/rec2.json";
import React from "react";

function PDSection3() {
  return (
    <Paper sx={{ width: "100%", p: 2, mt: 2 }}>
      <Stack>
        <Typography sx={{fontWeight:"bold",fontSize:"1.3rem",ml:1}}>Related products</Typography>
        <Box sx={{overflow:{xs:"auto",lg:"none"}}}>
        <Stack sx={{width:{xs:"1000px",lg:"fit-content"}}}  justifyContent="space-between" direction="row">

          {data.map((data, index) => {
            return (
              <IconButton key={index} sx={{ width: "16%", height: {xs:"350px",lg:"280px"},borderRadius:0 }}>
                <Stack sx={{ height: "100%" }}>
                  <Box sx={{ minHeight: "80%", bgcolor: "#EEEEEE", p: 1 }}>
                    <img
                      src={data.image}
                      alt="product image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 1 }}>
                    <Typography sx={{ textAlign: "start" ,fontSize:"1rem"}}>
                      {data.description}
                    </Typography>
                    <Typography sx={{ textAlign: "start" }}>
                      {data.priceRange}
                    </Typography>
                  </Box>
                </Stack>
              </IconButton>
            );
          })}
        </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

export default PDSection3;
