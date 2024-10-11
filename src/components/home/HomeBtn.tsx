"use client";
import React from "react";
import { Paper, Box, Button, Typography, Avatar } from "@mui/material";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { firstWordExtractor } from "../../utils/reuseables";

export default function HomeBtn() {
  const { data: session } = useSession();
  const avatarImage = session ? session?.user?.image : null;

  return (
    <Paper
      sx={{
        width: "100%",
        height: "38%",
        bgcolor: "secondary.light",
        display: "flex",
        flexDirection: "column",
        p: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mb: 2,
          color: "black",
        }}
      >
        <Avatar sx={{ mr: 2 }} src={avatarImage} />
        <Typography sx={{ width: "60%", fontSize: "1.3rem", color: "black" }}>
          Hi, {session ? firstWordExtractor(session?.user?.name) : "user"} let’s
          get stated
        </Typography>
      </Box>
      <Button variant="contained" sx={{ mb: 1, bgcolor: "secondary.main" }}>
        {session ? (
          <Link href="/dashboard">Dashboard</Link>
        ) : (
          <Link href="/signup">Join now</Link>
        )}
      </Button>
      <Button variant="contained">
        {session ? (
          <Link href="/cart"> Checkout</Link>
        ) : (
          <Link href="/login">Log in</Link>
        )}
      </Button>
    </Paper>
  );
}
