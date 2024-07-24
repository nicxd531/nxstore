import {
  Box,
  Button,
  Stack,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import React from "react";
import data from "../../data/savedForLater.json";
import { ShoppingCartOutlined } from "@mui/icons-material";

function SavedForLater() {
  return (
    <Paper sx={{ mt: 4, p: 2 }}>
      <Stack direction="column" sx={{ width: "100%" }}>
        <Box sx={{ mb: 1 }}>
          <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            Saved for later
          </Typography>
        </Box>
        <Box sx={{overflow:"auto",width:"100%"}}>

       
        <Stack direction="row" justifyContent="space-between" sx={{height:"382px",width:{xs:"700px",lg:"fit-content"}}}>
          {data.map((data, index) => {
            return (
              <Stack sx={{ width: "24%" }} key={index}>
                <Box sx={{ height: "60%", bgcolor: "#EEEEEE", py: 2 }}>
                  <img
                    src={data.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    alt="product image"
                  />
                </Box>
                <Box sx={{ height: "30%", textAlign: "start" }}>
                  <Typography
                    sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
                  >{`$${data.price}`}</Typography>
                  <IconButton sx={{ borderRadius: 0 ,textAlign:"start"}}>
                    <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                      {data.title}
                    </Typography>
                  </IconButton>
                </Box>
                <Box sx={{ height: "10%", textAlign: "start" }}>
                  <Button
                    startIcon={<ShoppingCartOutlined />}
                    variant="contained"
                  >
                    Move to cart
                  </Button>
                </Box>
              </Stack>
            );
          })}
        </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

export default SavedForLater;
