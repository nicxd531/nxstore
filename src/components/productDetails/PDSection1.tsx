import { Box, Stack,Paper } from "@mui/material";
import React from "react";
import ImageSlider from "./section1/ImageSlider";
import BasicDescription from "./section1/BasicDescription";
import SellersCard from "./section1/SellersCard";
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
    PriceStatus:string;
    Type:string;
    Material:string;
    Design:string;
    Customization:string;
    Protection:string;
    Warranty:string;
}
function PDSection1({ data }: myComponentProps) {
  const dis = data?.ProductImages;
  return (
    <Paper sx={{p:2}}>
      <Stack
        justifyContent="space-between"
        direction={{xs:"column",lg:"row"}}
        sx={{ width: "100%" }}
      >
        <ImageSlider data={dis} />
        <BasicDescription data={data} />
        <SellersCard />
      </Stack>
    </Paper>
  );
}

export default PDSection1;
