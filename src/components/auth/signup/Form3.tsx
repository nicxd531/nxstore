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

function Form3({ control, errors }: any) {
  const { newUserData, AddUserData } = signUpData();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2", // This is the Material-UI blue color
      },
    },
  });
  console.log({ newUserData });
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
            Enter Address{" "}
          </Typography>
          <Controller
            name="Address1"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ mt: 3 }}
                error={errors.Address1}
                id="outlined-multiline-flexible"
                label="Address 1"
                variant="standard"
                type="text"
                multiline
                maxRows={4}
                helperText={errors.Address1?.message}
              />
            )}
          />
          <Controller
            name="Address2"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ mt: 3 }}
                error={errors.Address2}
                id="filled-error-helper-text2"
                label="Address 2"
                variant="standard"
                type="text"
                multiline
                maxRows={4}
                helperText={errors.Address2?.message}
              />
            )}
          />
        </Stack>
      </ThemeProvider>
    </motion.div>
  );
}

export default Form3;
