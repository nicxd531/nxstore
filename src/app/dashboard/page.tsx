"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { Stack, Typography } from "@mui/material";

function Page() {
  const { data: session } = useSession();
  
  return (
    <Stack>
      {session ? (
        <span>
          {" "}
          {JSON.stringify(session)} <Typography>welcome back</Typography>{" "}
        </span>
      ) : (
        <Typography> uour not logged in</Typography>
      )}
    </Stack>
  );
}

export default Page;
