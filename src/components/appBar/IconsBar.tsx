import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Inventory, Message } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import sendTheme from "@/zustand/sendTheme";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

function IconsBar() {
  const { selectTheme, selectedTheme } = sendTheme();

  return (
    <Box sx={{ display: "flex" }}>
      {selectedTheme == "dark" ? (
        <IconButton
          sx={{ display: "flex", flexDirection: "column" }}
          onClick={() => selectTheme("light")}
        >
          <LightModeIcon />
          <Typography sx={{ display: { xs: "none", lg: "block" } }}>
            LIght
          </Typography>
        </IconButton>
      ) : (
        <IconButton
          sx={{ display: "flex", flexDirection: "column" }}
          onClick={() => selectTheme("dark")}
        >
          <NightlightIcon />
          <Typography sx={{ display: { xs: "none", lg: "block" } }}>
            Dark
          </Typography>
        </IconButton>
      )}
      <IconButton
        aria-label="cart"
        sx={{
          flexDirection: "column",
          display: { xs: "none", lg: "flex" },
        }}
      >
        <Message />
        <Typography sx={{ display: { xs: "none", lg: "block" } }}>
          Messages
        </Typography>
      </IconButton>
      <IconButton
        aria-label="cart"
        sx={{
          flexDirection: "column",
          display: { xs: "none", lg: "flex" },
        }}
      >
        <Inventory />
        <Typography sx={{ display: { xs: "none", lg: "block" } }}>
          Orders
        </Typography>
      </IconButton>
      <IconButton
        aria-label="cart"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Badge color="secondary" badgeContent={3} max={99}>
          <ShoppingCartOutlined />
        </Badge>
        <Typography sx={{ display: { xs: "none", lg: "block" } }}>
          My cart
        </Typography>
      </IconButton>
    </Box>
  );
}

export default IconsBar;
