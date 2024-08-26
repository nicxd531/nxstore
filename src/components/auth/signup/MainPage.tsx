"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import StepperBar from "./StepperBar";
import React, { useCallback, useEffect } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import signUpPage from "../../../zustand/SignUpPage";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { registrationSchema, RegistrationSchemaType } from "./schema";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@mui/lab/LoadingButton";

function MainPage() {
  const { currentPage, nextPage } = signUpPage();
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
    defaultValues: {
      number: "",
      surName: "",
      firstName: "",
      userName: "",
      email: "",
      Address1: "",
      Address2: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registrationSchema),
  });
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2", // This is the Material-UI blue color
      },
    },
  });
  const handlePageChange = () => {
    nextPage(currentPage + 1);
  };
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease", once: false });
  });

  const onSubmit = useCallback((values: RegistrationSchemaType) => {
    handleClick()
    alert(JSON.stringify(values, null, 4));
    console.log("hello");
  }, []);
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
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "60%", height: "80%" }}
        >
          <Box>
            <Typography
              component="h2"
              sx={{
                mb: { lg: 4 },
                fontSize: { lg: "1.3rem" },
                fontWeight: "bold",
              }}
            >
              Create an account
            </Typography>
          </Box>
          <StepperBar page={currentPage} />
          <Stack
            noValidate
            autoComplete="off"
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ width: { lg: "70%" }, mt: 2 }}
          >
            {currentPage == 0 && (
              <Form1 control={control} errors={errors}  />
            )}
            {currentPage == 1 && <Form2 control={control} errors={errors} />}
            {currentPage == 2 && <Form3 control={control} errors={errors} />}
            {currentPage == 3 && <Form4 control={control} errors={errors} />}
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%", mt: { lg: 2 } }}
          >
            {currentPage == 3 ? (
              <LoadingButton
                onClick={handleSubmit(onSubmit) }
                loading={loading}
                loadingPosition="start"
                type="submit" // Set type to submit
                data-aos="zoom-in"
                variant="contained"
                sx={{
                  width: "50%",
                  borderRadius: "50px",
                  mt: { lg: 3 },
                }}
              >
                <span>{loading ? "submitting" : "submit"}</span>
              </LoadingButton>
            ) : (
              <Button
                data-aos="zoom-in"
                onClick={handlePageChange}
                variant="contained"
                sx={{
                  width: "50%",
                  bgcolor: "black",
                  borderRadius: "50px",
                  mt: { lg: 3 },
                }}
              >
                Continue
              </Button>
            )}
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default MainPage;
