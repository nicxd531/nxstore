import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

interface myComponentProps {
  data: items;
}
interface items {
  image?: string;
  ProductImages?: string[];
  title?: string;
  price?: number;
  ratings?: number;
  discount?: number;
  orders?: number;
  main_category?: string;
  sub_category?: string;
  shipping_status?: string;
  description?: string;
  status: string;
  reviews: string;
  PriceStatus: string;
  Type: string;
  Material: string;
  Design: string;
  Customization: string;
  Protection: string;
  Warranty: string;
}
function MiniDescription({ data }: myComponentProps) {
  return (
    <Stack sx={{ mt: 2 }}>
      <Stack sx={{ mb: 1 }} direction="row">
        <Box sx={{ color: "#8B96A5" }}>
          <Typography sx={{ fontSize: "1.2rem" }}>Price:</Typography>
        </Box>
        <Typography sx={{ fontSize: "1.2rem", ml: 12 }}>
          {data?.PriceStatus}
        </Typography>
      </Stack>
      <Divider sx={{ border: "1px solid #BDC1C8" }} />
      <Stack sx={{ my: 1 }}>
        <Stack direction="row">
          <Box sx={{ color: "#8B96A5" }}>
            <Typography  sx={{ fontSize: "1.2rem" }}>Type:</Typography>
          </Box>
          <Typography sx={{ fontSize: "1.2rem", ml: 12 }}>{data?.Type}</Typography>
        </Stack>
        <Stack direction="row">
          <Box sx={{ color: "#8B96A5" }}>
            <Typography  sx={{ fontSize: "1.2rem" }}>Material: </Typography>
          </Box>
          <Typography sx={{ fontSize: "1.2rem", ml: 9 }}>{data?.Material}</Typography>
        </Stack>
        <Stack direction="row">
          <Box sx={{ color: "#8B96A5" }}>
            <Typography  sx={{ fontSize: "1.2rem" }}>Design: </Typography>
          </Box>
          <Typography sx={{ fontSize: "1.2rem", ml: 10 }}>{data?.Design}</Typography>
        </Stack>
      </Stack>
      <Divider sx={{ border: "1px solid #BDC1C8" }} />
      <Stack>
        <Stack sx={{my:1}} direction="row">
          <Box sx={{ color: "#8B96A5" }}>
            <Typography  sx={{ fontSize: "1.2rem" }}>Customization: </Typography>
          </Box>
          <Typography sx={{ fontSize: "1.2rem", ml: 4 }}>{data?.Customization}</Typography>
        </Stack>
        <Stack direction="row">
          <Box sx={{ color: "#8B96A5" }}>
            <Typography  sx={{ fontSize: "1.2rem" }}>Protection: </Typography>
          </Box>
          <Typography sx={{ fontSize: "1.2rem", ml: 7 }}>{data?.Protection}</Typography>
        </Stack>
        <Stack direction="row">
          <Box sx={{ color: "#8B96A5" }}>
            <Typography  sx={{ fontSize: "1.2rem" }}>Warranty: </Typography>
          </Box>
          <Typography sx={{ fontSize: "1.2rem", ml: 8 }}>{data?.Warranty}</Typography>
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  );
}

export default MiniDescription;
