import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function PriceCard() {
  const image = [
    "images/american express logo.png",
    "images/mastercard logo.png",
    "images/paypal logo.png",
    "images/visa pay.png",
    "images/apple pay.png",
  ];
  return (
    <Stack sx={{ width: "100%", p: 2 }}>
      <Stack justifyContent="space-between" direction="row">
        <Typography sx={{ fontSize: "1.4rem" }}>Subtotal:</Typography>
        <Box sx={{ color: "#505050" }}>
          <Typography sx={{ fontSize: "1.4rem" }}>$1403.97</Typography>
        </Box>
      </Stack>
      <Stack justifyContent="space-between" direction="row">
        <Typography sx={{ fontSize: "1.4rem" }}>Discount:</Typography>
        <Box sx={{ color: "#FA3434" }}>
          <Typography sx={{ fontSize: "1.4rem" }}>- $60.00</Typography>
        </Box>
      </Stack>
      <Stack justifyContent="space-between" direction="row">
        <Typography sx={{ fontSize: "1.4rem" }}>Tax:</Typography>
        <Box sx={{ color: "#00B517" }}>
          <Typography sx={{ fontSize: "1.4rem" }}>+ $14.00</Typography>
        </Box>
      </Stack>
      <Divider sx={{ border: "1px solid #E4E4E4", mt: 2 }} />
      <Stack
        sx={{ mt: 3, color: "black" }}
        justifyContent="space-between"
        direction="row"
      >
        <Typography sx={{ fontSize: "1.4rem", fontWeight: "bold" }}>
          Total:
        </Typography>
        <Box>
          <Typography sx={{ fontSize: "1.4rem", fontWeight: "bold" }}>
            $1357.97
          </Typography>
        </Box>
      </Stack>
      <Button sx={{ bgcolor: "#00B517", py: 1, fontSize: "1.2rem", mt: 2 }}>
        Checkout
      </Button>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{ width: "100%", mt: 2 }}
      >
        {image.map((data, index) => {
          return (
            <IconButton sx={{ borderRadius: "5px" }} key={index}>
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  border: "1px solid #E4E4E4",
                  borderRadius: "5px",
                  height: "22px",
                  width: "34px",
                }}
              >
                <img
                  src={data}
                  alt="payment method logo"
                  sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </Stack>
            </IconButton>
          );
        })}
      </Stack>
    </Stack>
  );
}

export default PriceCard;
