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
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@mui/lab/LoadingButton";
import Socials from "../Socials";
import Link from "next/link";
import { RegisterHandler } from "@/client/request";
import { errorhandler } from "@/utils/resolver";
import { Message, useToaster } from "rsuite";
import "rsuite/useToaster/styles/index.css";
import { errorHandlerT, registerT, responseHandlerT } from "@/utils/types";

function MainPage() {
  const { currentPage, nextPage } = signUpPage();
  const [loading, setLoading] = React.useState(false);
  const message = (type: any, message: string) => {
    return (
      <Message showIcon type={type} closable>
        <strong>{type}!</strong> {message}
      </Message>
    );
  };

  const toaster = useToaster();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      number: "0",
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
  const onSubmit: SubmitHandler<RegistrationSchemaType> = async (values) => {
    console.log({ values });
    const rawData = JSON.stringify(values, null, 4);
    try {
      setLoading(true);
      const response = await RegisterHandler(values);
      // Check if 'body' exists in response and if it contains 'success'
      if (
        response &&
        !response.hasError &&
        "body" in response &&
        response.body.success
      ) {
        toaster.push(message("success", response.body.success), {
          placement: "bottomEnd",
          duration: 5000,
        });
        alert(rawData);
        setLoading(false);
      }
    } catch (error) {
      toaster.push(message("error", "log in failed"), {
        placement: "bottomEnd",
        duration: 5000,
      });
      console.log(error);
      const errorType = "catch error ";
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  return (
    <ThemeProvider theme={theme}>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          width: { xs: "100%", lg: "50%" },
          height: "100%",
          bgcolor: "#FFFFFF",
          py: 2,
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
                mb: { xs: 2, lg: 4 },
                fontSize: { xs: "1.3rem", lg: "1.3rem" },
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
            sx={{ width: { xs: "100%", lg: "70%" }, mt: 2 }}
          >
            {currentPage == 0 && <Form1 control={control} errors={errors} />}
            {currentPage == 1 && <Form2 control={control} errors={errors} />}
            {currentPage == 2 && <Form3 control={control} errors={errors} />}
            {currentPage == 3 && <Form4 control={control} errors={errors} />}
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{ width: "100%", mt: { xs: 2, lg: 2 } }}
            >
              {currentPage == 3 ? (
                <LoadingButton
                  onClick={handleSubmit(onSubmit)}
                  loading={loading}
                  loadingPosition="start"
                  type="submit" // Set type to submit
                  data-aos="zoom-in"
                  variant="contained"
                  sx={{
                    width: "55%",
                    borderRadius: "50px",
                    mt: { lg: 3 },
                    mx: "auto",
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
          <Typography sx={{ fontSize: { xs: "1.2rem", lg: "1.2rem" }, mt: 2 }}>
            Already have an account ?{" "}
            <Link style={{ fontWeight: "bold" }} href="/login">
              Log in
            </Link>{" "}
          </Typography>
          <Socials myString={"Sign up"} />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default MainPage;
