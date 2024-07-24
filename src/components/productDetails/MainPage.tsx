import { Box, Stack } from "@mui/material";
import React from "react";
import ImageSlider from "./section1/ImageSlider";
import PDSection1 from "./PDSection1";

import PDSection3 from "./PDSection3";
import data from "../../data/AllData.json"
import PdSection2 from "./PDSection2";
import DiscountCard from "../reuseables/DiscountCard";
interface myComponentProps {
  pData?: pData;
}
interface pData {
  id?: string;
  slug?: string;
}

function MainPage({ pData }: myComponentProps) {
const mainData = data.filter((data)=>pData?.id===data.id )
  return (
    <Stack>
      <PDSection1 data={mainData[0]} />
      <PdSection2 data={mainData[0]}/>
      <PDSection3 />
      <DiscountCard/>
    </Stack>
  );
}

export default MainPage;
