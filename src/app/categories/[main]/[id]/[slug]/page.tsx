import MainPage from "@/components/productDetails/MainPage";
import { Box, Typography } from "@mui/material";
import React from "react";

interface myComponent {
  id?: string;
  slug?: string;
}
function page({ params }: myComponent) {
  return (
    <Box sx={{px:{xs:1,lg:0}}}>
      <MainPage pData={params} />
    </Box>
  );
}

export default page;
