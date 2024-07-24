import { Stack } from "@mui/material";
import React from "react";
import YouMAyLike from "./section2/YouMAyLike";
import Details from "./section2/Details";

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
  Model: string;
  Style: string;
  Certificate: string;
  Size: string;
  Memory: string;
  features: string[];
}
function PdSection2({ data }: myComponentProps) {
  return (
    <Stack sx={{ mt: 2 }} justifyContent="space-between" direction={{xs:"column",lg:"row"}}>
      <Details data={data} />
      <YouMAyLike />
    </Stack>
  );
}

export default PdSection2;
