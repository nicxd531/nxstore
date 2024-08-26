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
function Form1({ control, errors }: any) {
  const { newUserData, AddUserData } = signUpData();

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
            Enter Name{" "}
          </Typography>

          <Controller
            name="surName"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mt: 3 }}
                error={errors.surName}
                {...field}
                id="filled-error-helper-text"
                label="Surname"
                variant="standard"
                type="text"
                helperText={errors.surName?.message}
              />
            )}
          />

          <Controller
            name="firstName"
           
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mt: 3 }}
                error={!!errors.firstName}
                {...field}
                id="filled-error-helper-text2"
                label="First Name"
                variant="standard"
                type="text"
                helperText={errors.firstName?.message}
              />
            )}
          />

          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mt: 3 }}
                error={!!errors.userName}
                {...field}
                id="standard-error-helper-text"
                label="User Name"
                helperText={errors.userName?.message}
                variant="standard"
                type="text"
              />
            )}
          />
        </Stack>
      </ThemeProvider>
    </motion.div>
  );
}

export default Form1;
