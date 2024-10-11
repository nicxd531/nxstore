"use client";
import React, { useState } from "react";
import { Box, TextField, Stack, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import signUpData from "../../../zustand/auth/signUpData";
import { motion } from "framer-motion";
import { Controller } from "react-hook-form";

const pageVariants = {
  active: {
    scale: 1, // Zoom in (full size)
    transition: {
      duration: 0.5, // Animation duration
    },
  },
  inactive: {
    scale: 0.5, // Zoom out (smaller size)
    transition: {
      duration: 0.5, // Animation duration
    },
  },
};

function Form2({ control, errors }: any) {
  const { newUserData, AddUserData } = signUpData();
  const [error, setError] = useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2", // This is the Material-UI blue color
      },
    },
  });

  return (
    <motion.div
      initial="inactive"
      animate="active"
      exit="inactive"
      variants={pageVariants}
    >
      <ThemeProvider theme={theme}>
        <Stack>
          <Typography
            sx={{
              width: "100%",
              textAlign: { lg: "center" },
              fontSize: { lg: "1.2rem" },
            }}
          >
            Enter Emaii{" "}
          </Typography>

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mt: 3 }}
                error={errors.email}
                {...field}
                id="filled-error-helper-text"
                label="Email"
                variant="standard"
                type="email"
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="number"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mt: 3 }}
                error={errors.number}
                {...field}
                id="filled-error-helper-text2"
                label="Phone Number"
                variant="standard"
                type="text"
                helperText={errors.number?.message}
              />
            )}
          />
        </Stack>
      </ThemeProvider>
    </motion.div>
  );
}

export default Form2;
