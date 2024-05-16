"use client";
import { Menu } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography, Button } from "@mui/material";
import React from "react";
import Form from "react-bootstrap/Form";
import sendTheme from "../../zustand/sendTheme";

function AppBar2lg() {
  const { selectedTheme } = sendTheme();
  const btn = ["Hot offers", "Gift boxes", "projects", "Menu items"];
  return (
    <Paper
      sx={{
        display: { xs: "none", lg: "flex", width: "100%" },
        borderRadius: 0,
        justifyContent: "space-between",
        alignItems: "center",
        px: { lg: 10 }
      }}
      
    >
      <Box>
        <IconButton
          sx={{
            borderRadius: 0,
            color: `${selectedTheme == "dark" ? "white" : "black"}`,
          }}
        >
          <Menu sx={{ mr: 1 }} />
          <Typography>All categories</Typography>
        </IconButton>
        {btn.map((data, index) => (
          <Button
            sx={{ color: `${selectedTheme == "dark" ? "white" : "black"}` }}
            key={index}
          >
            {data}
          </Button>
        ))}
      </Box>
      <Box sx={{display:"flex"}}>
        <Form.Select
         
          aria-label="Default select example"
          style={{
            fontSize: "1rem",
            backgroundColor: "transparent",
            border: "none",
            color: `${selectedTheme == "dark" ? "white" : "black"}`,
            marginRight: "15px",
            padding: "5px",
            minWidth:"110px",
          }}
        >
          <option style={{ color: "black" }} value="usd">
            English, USD
          </option>
          <option style={{ color: "black" }} value="eur">
            French, EUR
          </option>
          <option style={{ color: "black" }} value="jpy">
            Japanese, JPY
          </option>
          <option style={{ color: "black" }} value="inr">
            Hindi, INR
          </option>
        </Form.Select>
        <Form.Select
          
          aria-label="Default select example"
          style={{
            minWidth:"150px",
            fontSize: "1rem",
            backgroundColor: "transparent",
            border: "none",
            color: `${selectedTheme == "dark" ? "white" : "black"}`,
            padding: "2px",
          }}
        >
          <option style={{ color: "black" }}>Ship To United States</option>
          <option style={{ color: "black" }}>Ship To United Kingdom</option>
          <option style={{ color: "black" }}>Ship To France</option>
          <option style={{ color: "black" }}>Ship To Japan</option>
          <option style={{ color: "black" }}>Ship To Germany</option>
          <option style={{ color: "black" }}>Ship To Italy</option>
          <option style={{ color: "black" }}>Ship To China</option>
          <option style={{ color: "black" }}>🇺🇸 United States</option>
          <option style={{ color: "black" }}>🇬🇧 United Kingdom</option>
          <option style={{ color: "black" }}>🇫🇷 France</option>
        </Form.Select>
      </Box>
    </Paper>
  );
}

export default AppBar2lg;
