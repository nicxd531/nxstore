import React from "react";
import { Box, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import toggleGrid from "@/zustand/toggleGrid";
import ItemsList from "./ItemsList";
import ItemGrid from "./ItemGrid";

interface items {
  image: string;
  ProductImages?:string[];
  title: string;
  price: number;
  ratings: number;
  discount: number;
  orders: number;
  main_category: string;
  sub_category: string;
  shipping_status?: string;
  description?: string;
}

interface myComponentProps {
  items: items[];
}
function MainWindow({ items }: myComponentProps) {
  const { selectedGrid, selectGrid } = toggleGrid();
  return (
    <Box className="custom-scrollbar" sx={{ width: "100%", height: "90%", overflow: "auto" }}>
      <Grid container spacing={2} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, lg: 3 }}>
        {items?.map((data, index) => {
          return selectedGrid == "list" ? (
            <Grid item xs={12} key={index}>
              <ItemsList data={data} />
            </Grid>
          ) : (
            <Grid item xs={6} lg={4} key={index}>
              <ItemGrid data={data} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default MainWindow;
