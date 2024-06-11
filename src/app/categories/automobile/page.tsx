"use client";
import React from "react";
import { Box, Paper, Button, Typography } from "@mui/material";
import Panel from "../../../components/categories/panel/Panel";
import CatMainWin from "@/components/categories/Main/CatMainWin";

function page() {
  const catName ="Automobile"
  const subCatOptional = [
    "Mobile accessory",
    "Electronics",
    "Smartphones ",
    "Modern tech",
  ];
  const BrandsCatOptional = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];
  const featuresCatOptional = [
    "Metallic",
    "Plastic cover",
    "8GB Ram ",
    "Super power",
    "Large Memory",
  ];
  const conditionCatOptional = ["Any", "Refurbished", "Brand new", "Old items"];
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex"
      }}
    >
      <Panel
        subCatOptional={subCatOptional}
        BrandsCatOptional={BrandsCatOptional}
        featuresCatOptional={featuresCatOptional}
        conditionCatOptional={conditionCatOptional}
      />
      <CatMainWin catName={catName} catItemsLenght={15000}/>
    </Box>
  );
}

export default page;
