import React from "react";
import Section1 from "@/components/cart/Section1";
import Section2 from "@/components/cart/Section2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box } from "@mui/material";
import SavedForLater from "@/components/reuseables/SavedForLater";
import DiscountCard from "@/components/reuseables/DiscountCard";

function page() {
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "87%" },
        mx: { lg: 10 },
        mt: 2,
      }}
    >
      <Section1 />
      <Section2/>
      <SavedForLater/>
      <DiscountCard/>
    </Box>
  );
}

export default page;
