"use client";
import React, { useCallback } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { registrationSchema, RegistrationSchemaType } from "./schema";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "./Form";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "next/link";
import Socials from "../Socials";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Message, toaster, useToaster } from "rsuite";

function MainPage() {
  const [loading, setLoading] = React.useState(false);
  
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(registrationSchema),
  });

  const router = useRouter();
  const message = (type: any, message: string) => {
    return (
      <Message showIcon type={type} closable>
        <strong>{type}!</strong> {message}
      </Message>
    );
  };

  const toaster = useToaster();

  const onSubmit: SubmitHandler<RegistrationSchemaType> = async (values) => {
    setLoading(true);
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    
    try {
      if (!response?.error) {
        toaster.push(message("success", "Log in successsful"), {
          placement: "bottomEnd",
          duration: 5000,
        });
        router.push("/dashboard");
        setLoading(false);
      }else if(response?.error){
        toaster.push(message("error", response?.error), {
          placement: "bottomEnd",
          duration: 5000,
        });
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      toaster.push(message("error", "Log in failed, try again"), {
        placement: "bottomEnd",
        duration: 5000,
      });
      setLoading(false);
    }
    setLoading(false);
  };
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
          width: { xs: "100%", lg: "50%" },
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
          sx={{ width: { xs: "95%", lg: "80%" }, height: "80%" }}
        >
          <Box>
            <Typography
              component="h2"
              sx={{
                mb: { lg: 4 },
                fontSize: { xs: "1.8rem", lg: "1.8rem" },
                fontWeight: "bold",
              }}
            >
              Welcome Back
            </Typography>
          </Box>
          <Form control={control} errors={errors} />
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%", mt: { xs: 4, lg: 2 } }}
          >
            <LoadingButton
              onClick={handleSubmit(onSubmit)}
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
          <Typography sx={{ fontSize: { lg: "1.2rem" }, mt: 2 }}>
            Don&apos;t have an account?{" "}
            <Link style={{ fontWeight: "bold" }} href="/signup">
              Sign up
            </Link>{" "}
          </Typography>
          <Stack
            alignItems={"center"}
            sx={{ width: { xs: "80%", lg: "100%" }, mt: { xs: 3 } }}
          >
            <Socials myString={"Log in"} />
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default MainPage;
