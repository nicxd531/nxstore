"use client";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

function AvatarIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  interface event {
    event: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }
  const handleMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Avatar sx={{ width: 24, height: 24 }} />
        <Typography sx={{ display: { xs: "none", lg: "block" } }}>
          Profile
        </Typography>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: 4 }}
      >
        <Link href="/profile">
          <MenuItem onClick={handleClose}>
            Dashboard
            <Box sx={{ ml: 1 }}>
              <AccountCircleIcon />
            </Box>
          </MenuItem>
        </Link>
        <MenuItem>
          Logout
          <Box sx={{ ml: 1 }}>
            <LogoutIcon />
          </Box>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default AvatarIcon;
