"use client"
import React from "react";
import { Box, Paper,Button,Typography } from '@mui/material'
import Panel from "../../../components/categories/panel/Panel";
import CatMainWin from "@/components/categories/Main/CatMainWin";
function page() {
 
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <Panel />
      <CatMainWin catName={"Animals and Pets"} catItemsLenght={15000}/>
    </Box>
  );
}

export default page;
