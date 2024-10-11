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

function Form4({ control, errors }: any) {
  const { newUserData, AddUserData } = signUpData();
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
    >
      <ThemeProvider theme={theme}>
        <Stack>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
                <InputLabel
                  error={errors.password}
                  htmlFor="standard-adornment-password"
                >
                  Password
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

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
                <InputLabel
                  error={errors.confirmPassword}
                  htmlFor="standard-adornment-password"
                >
                  confirm password
                </InputLabel>
                <Input
                  {...field}
                  sx={{ mt: 3 }}
                  error={errors.confirmPassword}
                  id="standard-adornment-confirmPassword"
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
          {errors.confirmPassword && (
            <Box sx={{ color: "red" }}>
              <Typography
                sx={{ color: "red", fontSize: "0.8rem", text: "center" }}
              >
                {errors.confirmPassword?.message}
              </Typography>
            </Box>
          )}
        </Stack>
      </ThemeProvider>
    </motion.div>
  );
}

export default Form4;
