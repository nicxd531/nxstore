import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import FilterBtn from "./filter/FilterBtn";
import SortBtn from "./filter/Sort";
import Grid from "./filter/Grid";
import Chips from "./filter/Chips";

interface myComponentProps {
  catName?: string;
  catItemsLenght?: number;
}

function CatAppBar({ catName, catItemsLenght }: myComponentProps) {

  
  const itemList = catItemsLenght
    ? `${catItemsLenght} items found in`
    : "no items found in ";
  return (
    <Box sx={{ mb: 2, width: "100%" }}>
      <Stack
        justifyContent={{ xs: "space-around", lg: "space-between" }}
        alignItems="center"
        sx={{
          px: { lg: 3 },
          width: "100%",
          borderTop: "2px solid #DEE2E7",
          borderBottom: "2px solid #DEE2E7",
          py: { xs: 2, lg: 1 },
          border: { lg: "2px solid #DEE2E7" },
          borderRadius: { lg: 2 },
        }}
        direction="row"
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: { xs: "none", lg: "flex" },
            width: "fit-content",
            flexWrap: "wrap",
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}> {itemList}</Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {catName}
          </Typography>
        </Stack>
        <SortBtn />
        <FilterBtn />
        <Grid />
      </Stack>
      <Chips />
    </Box>
  );
}

export default CatAppBar;
