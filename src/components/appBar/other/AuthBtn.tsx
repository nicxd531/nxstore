import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useSession } from "next-auth/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

interface myComponentProps {
  anchorEl: any;
  setAnchorEl: any;
}

function AuthBtn({ anchorEl, setAnchorEl }: myComponentProps) {
  const { data: session } = useSession();

  interface event {
    event: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }

  const signUserOut = async () => {
    try {
      await signOut();
      redirect("/");
    } catch (err) {
      console.log({ err });
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      {session ? (
        <Stack>
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
            <Link href={"/dashboard"}>
              <MenuItem onClick={handleClose}>
                Dashboard
                <Box sx={{ ml: 1 }}>
                  <AccountCircleIcon />
                </Box>
              </MenuItem>
            </Link>
            <MenuItem onClick={signUserOut}>
              Logout
              <Box sx={{ ml: 1 }}>
                <LogoutIcon />
              </Box>
            </MenuItem>
          </Menu>
        </Stack>
      ) : (
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
          <Link href={"/signup"}>
            <MenuItem onClick={handleClose}>
              Sign Up
              <Box sx={{ ml: 1 }}>
                <AccountCircleIcon />
              </Box>
            </MenuItem>
          </Link>
          <Link href={"/login"}>
            <MenuItem onClick={signUserOut}>
              Log In
              <Box sx={{ ml: 1 }}>
                <LogoutIcon />
              </Box>
            </MenuItem>
          </Link>
        </Menu>
      )}
    </Box>
  );
}
export default AuthBtn;
