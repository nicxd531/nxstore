"use client";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import AuthBtn from "./other/AuthBtn";
import { useSession } from "next-auth/react";

function AvatarIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { data: session } = useSession();
  interface event {
    event: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }
  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box>
      <Box>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          sx={{ display: "flex", flexDirection: "column", padding: "5px" }}
        >
          <Avatar sx={{ width: 23, height: 23 }} />
        </IconButton>
        <Typography sx={{ display: { xs: "none", lg: "block" } }}>
          {session ? "Profile" : "Client"}
        </Typography>
      </Box>
      <AuthBtn anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </Box>
  );
}

export default AvatarIcon;
