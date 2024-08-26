"use client";
import React, { useState } from "react";
import { Box, TextField, Stack, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import logInData from "../../../zustand/auth/logInData";
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

function Form({ control, errors }: any) {
  const { userData, AddUserData } = logInData();
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
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
      style={{ width: "60%" }}
    >
      <ThemeProvider theme={theme}>
        <Stack
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mt: 3 }}
                error={!!errors.email}
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
            name="password"
            control={control}
            render={({ field }) => (
              <FormControl sx={{ width: "100%", mt: 2 }} variant="standard">
                <InputLabel
                  error={errors.password}
                  htmlFor="standard-adornment-password"
                >
                  password
                </InputLabel>
                <Input
                  {...field}
                  sx={{ mt: 3 }}
                  error={errors.password}
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            )}
          />
          {errors.password && (
            <Box sx={{ color: "red" }}>
              <Typography
                sx={{ color: "red", fontSize: "0.8rem", text: "center" }}
              >
                {errors.password?.message}
              </Typography>
            </Box>
          )}
        </Stack>
      </ThemeProvider>
    </motion.div>
  );
}

export default Form;
