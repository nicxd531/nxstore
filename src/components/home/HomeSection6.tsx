import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import recommendations from "../../data/recommendations.json";
import sendTheme from "@/zustand/sendTheme";

function HomeSection6() {
  const { selectedTheme } = sendTheme();
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "87%" },
        mx: { lg: 10 },
        height: { xs: "fit-content", lg: "fit-content" },
        mt: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: "1.7rem",
          my: 2,
          fontWeight: "bold",
          ml: { xs: 1, lg: 0 },
        }}
      >
        Recommended items
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "space-around", lg: "space-between" },
        }}
      >
        {recommendations.map((data, index) => {
          return (
            <Paper
              sx={{
                width: { xs: "45%", lg: "18%" },
                mb: 2,
                p: 2,
                height: { lg: "320px" },
              }}
              key={index}
            >
              <IconButton
                component="div"
                sx={{
                  borderRadius: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  color: selectedTheme == "light" ? "black" : "white",
                }}
              >
                <Box sx={{ height: "60%" }}>
                  <img
                    src={data.image}
                    alt="recomendation image"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    textAlign: "start",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    mt: 2,
                  }}
                >
                  ${data.price}
                </Typography>
                <Box
                  className={`${selectedTheme == "light" && "text-muted"}`}
                  sx={{ borderRadius: 0 }}
                >
                  <Typography
                    sx={{
                      textAlign: "start",
                      fontSize: { xs: "1rem", lg: "1.1rem" },
                    }}
                  >
                    {data.description}
                  </Typography>
                </Box>
              </IconButton>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
}

export default HomeSection6;
