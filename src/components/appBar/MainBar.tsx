"use client";
import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TemporaryDrawer from "./TemporaryDrawer";
import Link from "next/link";
import IconsBar from "./IconsBar";
import AvatarIcon from "./AvatarIcon";

export default function MainBar() {
  const [open, setOpen] = React.useState(false);
  // handle Theme change function ,toggleDrawer,handleMenu,handleClose,handleSignOut functions

  const toggleDrawer = (e: boolean) => {
    setOpen(e);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ boxShadow: 0, borderBottom: "1px solid #bab5b5", px: { lg: 8 } }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { lg: "none" } }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">Nxnews</Link>
          </Typography>
          <IconsBar />
          <AvatarIcon />
        </Toolbar>
      </AppBar>
      <TemporaryDrawer toggleDrawer={toggleDrawer} open={open} />
    </Box>
  );
}
