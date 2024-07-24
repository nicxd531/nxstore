import React from "react";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import {
  Box,
  Paper,
  Avatar,
  Typography,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function SellersCard() {
  return (
    <Box sx={{ width: {xs:"100%",lg:"25%"}, height: "100%" }}>
      <Paper sx={{ width: "100%", height: "100%", p: 2 }}>
        <Stack direction="row">
          <Avatar sx={{ bgcolor: "#C6F3F1" }} variant="rounded">
            R
          </Avatar>
          <Box sx={{ ml: 2 }}>
            <Typography sx={{ fontSize: "1.2rem", fonntWeight: "bold" }}>
              Supplier
            </Typography>
            <Typography sx={{ fontSize: "1.2rem", fonntWeight: "bold" }}>
              Guanjoi Trading LLC
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ border: "1px solid #BDC1C8", mt: 2 }} />
        <Stack sx={{ mt: 2, color: "#8B96A5" }} direction="row">
          <Box>
            <img src="/images/UK.png" />
          </Box>
          <Typography sx={{ fontSize: "1.2rem", fonntWeight: "bold", ml: 2 }}>
            Germany, Berlin
          </Typography>
        </Stack>
        <Stack sx={{ mt: 2, color: "#8B96A5" }} direction="row">
          <VerifiedUserOutlinedIcon sx={{ width: "24px", height: "24px" }} />
          <Typography sx={{ fontSize: "1.2rem", fonntWeight: "bold", ml: 2 }}>
            Verified Seller
          </Typography>
        </Stack>
        <Stack sx={{ mt: 2, color: "#8B96A5" }} direction="row">
          <LanguageOutlinedIcon sx={{ width: "24px", height: "24px" }} />
          <Typography sx={{ fontSize: "1.2rem", fonntWeight: "bold", ml: 2 }}>
            Worldwide shipping
          </Typography>
        </Stack>
        <Stack sx={{ mt: 2 }}>
          <Button color="secondary" variant="contained">
            Send inquiry
          </Button>
          <Button variant="contained" sx={{ mt: 1, color: "#0D6EFD" }}>
            Seller’s profile
          </Button>
        </Stack>
      </Paper>

      <Stack direction="column" sx={{mt:2}}>
        <Button sx={{mt:1 ,fontSize:"1.1rem"}} color="secondary" startIcon={<FavoriteBorderIcon />}>
          Save for later
        </Button>
        <Button sx={{mt:1 ,fontSize:"1.1rem"}} color="secondary" startIcon={<AddShoppingCartIcon />}>
          ADD TO CART
        </Button>
      </Stack>
    </Box>
  );
}

export default SellersCard;
