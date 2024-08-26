"use client";
import React, { useCallback} from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { registrationSchema, RegistrationSchemaType } from "./schema";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "./Form";
import LoadingButton from "@mui/lab/LoadingButton";

function MainPage() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = useCallback((values: RegistrationSchemaType) => {
    handleClick()
    alert(JSON.stringify(values, null, 4));
    console.log("hello");
  }, []);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2", // This is the Material-UI blue color
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "50%",
          height: "100%",
          bgcolor: "#FFFFFF",
        }}
      >
        <Stack
         noValidate
         autoComplete="off"
         component="form"
         onSubmit={handleSubmit(onSubmit)}
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "80%", height: "80%" }}
        >
          <Box>
            <Typography
              component="h2"
              sx={{
                mb: { lg: 4 },
                fontSize: { lg: "1.8rem" },
                fontWeight: "bold",
              }}
            >
              welcome Back
            </Typography>
          </Box>
          <Form control={control} errors={errors} />
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%", mt: { lg: 2 } }}
          >
            <LoadingButton
              onClick={() => {
                handleSubmit(onSubmit);
                handleClick;
              }}
              loading={loading}
              loadingPosition="start"
              type="submit" // Set type to submit
              data-aos="zoom-in"
              variant="contained"
              sx={{
                width: "30%",
                borderRadius: "50px",
                mt: { lg: 3 },
              }}
            >
              <span>{loading ? "loging in .." : "Log in"}</span>
            </LoadingButton>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default MainPage;
