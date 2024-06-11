import { Box } from "@mui/material";
import React from "react";
import Brands from "./Brands";
import SubCategories from "./SubCategories";
import Features from "./Features";
import PriceRange from "./PriceRange";
import Condition from "./Condition";
import Ratings from "./Ratings";

interface myComponentProps {
  BrandsCatOptional?: string[];
  subCatOptional?: string[];
  featuresCatOptional?: string[];
  conditionCatOptional?: string[];
}
function Panel({
  BrandsCatOptional,
  subCatOptional,
  featuresCatOptional,
  conditionCatOptional,
}: myComponentProps) {
  return (
    <Box
      sx={{
        width: "20%",
        display:{xs:"none",lg:"block"},
        pb:6
      }}
    >
      <SubCategories optionalStringArray={subCatOptional} />
      <Brands optionalStringArray={BrandsCatOptional} />
      <Features optionalStringArray={featuresCatOptional} />
      <PriceRange />
      <Condition optionalStringArray={conditionCatOptional} />
      <Ratings />
    </Box>
  );
}

export default Panel;
