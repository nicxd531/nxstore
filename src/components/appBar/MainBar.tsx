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
import SearchBarLg from "./search/SearchBarLg";
import SearchBarXs from "./search/SearchBarXs";

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
        sx={{ boxShadow: 0, borderBottom: {lg:"1px solid #bab5b5"}, px: { lg: 8 } }}
      >
        <Toolbar sx={{ justifyContent: {lg:"space-between"} }}>
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
          <Typography variant="h6" component="div" sx={{mr:{xs:"auto",lg:0},height:{xs:"30px",lg:"40px"}}}>
            <Link href="/">
              <img alt="store loge" src="/images/logo-colored.png" style={{width:"100%",height:"100%"}} />
            </Link>
          </Typography>
          <SearchBarLg />
          <Box sx={{display:"flex"}}>
            <IconsBar />
            <AvatarIcon />
          </Box>
        </Toolbar>
        <SearchBarXs/>
      </AppBar>
      <TemporaryDrawer toggleDrawer={toggleDrawer} open={open} />
    </Box>
  );
}
