import MainPage from "@/components/productDetails/MainPage";
import { Box, Typography } from "@mui/material";
import React from "react";

interface myComponent {
  id?: string;
  slug?: string;
}
function page({ params }: myComponent) {
  return (
    <Box>
      <MainPage pData={params} />
    </Box>
  );
}

export default page;
