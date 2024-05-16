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
    <Box sx={{ display: "flex" ,justifyContent:"space-between",alignItems:"center"}}>
      {selectedTheme == "dark" ? (
        <Box>
          <IconButton
            sx={{ display: "flex", flexDirection: "column" ,p:1}}
            onClick={() => selectTheme("light")}
          >
            <LightModeIcon />
          </IconButton>
          <Typography sx={{ display: { xs: "none", lg: "block" } ,mt:0}}>
            LIght
          </Typography>
        </Box>
      ) : (
        <Box>
          <IconButton
            sx={{ display: "flex", flexDirection: "column",p:1 }}
            onClick={() => selectTheme("dark")}
          >
            <NightlightIcon />
          </IconButton>
          <Typography sx={{ display: { xs: "none", lg: "block" } }}>
            Dark
          </Typography>
        </Box>
      )}
      <Box sx={{mr:1,justifyContent:"center",alignItems:"center",flexDirection:"column",display: { xs: "none", lg: "flex" }}}>
        <IconButton
          aria-label="cart"
          sx={{
            flexDirection: "column"
            ,p:1
            
          }}
        >
          <Message />
        </IconButton>
        <Typography sx={{ display: { xs: "none", lg: "block" } }}>
          Messages
        </Typography>
      </Box>
      <Box sx={{mr:1,justifyContent:"center",alignItems:"center",flexDirection:"column",display: { xs: "none", lg: "flex" }}}>
        <IconButton
          aria-label="cart"
          sx={{
            flexDirection: "column",
            display: { xs: "none", lg: "flex" }
            ,p:1
          }}
        >
          <Inventory />
        </IconButton>
        <Typography sx={{ display: { xs: "none", lg: "block" } }}>
          Orders
        </Typography>
      </Box>
      <Box sx={{mr:1,justifyContent:"center",alignItems:"center",flexDirection:"column",display: { xs: "none", lg: "flex" }}}>
        <IconButton
          aria-label="cart"
          sx={{ display: "flex", flexDirection: "column",p:1 }}
        >
          <Badge color="secondary" badgeContent={3} max={99}>
            <ShoppingCartOutlined />
          </Badge>
        </IconButton>
        <Typography sx={{ display: { xs: "none", lg: "block" } }}>
          My cart
        </Typography>
      </Box>
    </Box>
  );
}

export default IconsBar;
