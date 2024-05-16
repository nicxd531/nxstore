"use client"
import React from "react";
import { Paper, Box, Typography, Chip,IconButton } from "@mui/material";
import Flippo from "./Flippo";
import data1 from "../../data/data1.json";
import sendTheme from "@/zustand/sendTheme";

function HomeSection2() {
  const {selectedTheme}=sendTheme()
  return (
    <Paper
      sx={{
        width: { xs: "100%", lg: "87%" },
        mx: { lg: 10 },
        height: { xs: "352px", lg: "200px" },
        mt: 2,
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: { lg: "space-between" },
       
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", lg: "23%" },
          p: 2,
          border: "1px solid ",
          borderColor: `${selectedTheme== "light"?"#EFF2F4":"#121212"}`,
          display: "flex",
          flexDirection: { xs: "row", lg: "column" },
        }}
      >
        <Box sx={{ width: { xs: "40%", lg: "100%" } }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.4rem", lg: "1.9rem" },
            }}
          >
            Deals and offers
          </Typography>
          <Typography sx={{ fontSize: { xs: "1.2rem", lg: "1.5rem" }, mb: 2 }}>
            Hygiene equipments
          </Typography>
        </Box>

        <Flippo />
      </Box>

      <Box sx={{ width: { xs: "100%", lg: "77%" }, display: "flex" }}>
        <Box
          className="scroll-bar"
          sx={{
            width: { xs: "100%" },
            display: "flex",
            overflowX: "auto",
            whiteSpace: "nowrap",

          }}
        >
          {data1.map((data, index) => {
            return (
              <IconButton
                key={index}
                sx={{
                  minWidth: { xs: "160px", lg: "20%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: { xs: 2, lg: 2 },
                  border: "1px solid",
                  borderColor: `${selectedTheme== "light"?"#EFF2F4":"#121212"}`,
                  borderRadius:0
                }}
              >
                <Box sx={{ height: { xs: "70%", lg: "60%" } }}>
                  <img
                    src={data.image}
                    alt="category image"
                    style={{ height: "100%", width: "100%" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: { xs: 1, lg: 1 },
                  }}
                >
                  <Typography
                    sx={{
                      mb: { xs: 1, lg: 1 },
                      fontWeight: "bold",
                      fontSize: { xs: "1.2rem" },
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Chip
                    sx={{
                      bgcolor: "#FFE3E3",
                      color: "#EB001B",
                      mt: { xs: 1, lg: 0 },
                      fontSize: { xs: "1.2rem" },
                    }}
                    label={`-${data.discount}%`}
                  />
                </Box>
              </IconButton>
            );
          })}
        </Box>
      </Box>
    </Paper>
  );
}

export default HomeSection2;
