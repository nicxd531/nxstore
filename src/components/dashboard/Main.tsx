import { Box, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";
import UnAuthourized from "../reuseables/UnAuthourized";

function Main() {
  const { data: session } = useSession();
  return (
    <Box sx={{ width: "80%", minHeight: "100vh" }}>
      {session ? (
        <span>
          {" "}
          {JSON.stringify(session)} <Typography>welcome back</Typography>{" "}
        </span>
      ) : (
        <UnAuthourized />
      )}
    </Box>
  );
}

export default Main;
