import { Box, Stack } from "@mui/material";
import React from "react";
import ImageSlider from "./section1/ImageSlider";
import BasicDescription from "./section1/BasicDescription";
interface myComponentProps{
    data:items
}
interface items {
    image?: string;
    ProductImages?:string[];
    title?: string;
    price?: number;
    ratings?: number;
    discount?: number;
    orders?: number;
    main_category?: string;
    sub_category?: string;
    shipping_status?: string;
    description?: string;
  }
function PDSection1({data}:myComponentProps) {

const dis = data?.ProductImages
  return (
    <Stack justifyContent="space-between" direction="row" sx={{ width: "100%" }}>
      <ImageSlider data={dis} />
      <BasicDescription/>
    </Stack>
  );
}

export default PDSection1;
