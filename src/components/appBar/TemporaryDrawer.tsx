import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BusinessIcon from "@mui/icons-material/Business";
import HouseIcon from "@mui/icons-material/House";
import { Avatar, Typography } from "@mui/material";
import Link from "next/link";
import { FavoriteBorder, FormatListBulleted, HeadsetMic, Inventory, Language } from "@mui/icons-material";

interface props {
  toggleDrawer:(value:boolean)=>void, 
  open:boolean
}
export default function TemporaryDrawer({toggleDrawer, open}:props ){
  // small screens temporary drawer
  const DrawerList = (
    <Box
      sx={{ width: 250, top: 80 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        <Box
          sx={{
            textDecoration: "none",
            flexGrow: 1,
            textAlign: "center",
            pl: 2,
            mt: 4,
          }}
        >
          <Avatar alt="remy" />
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "start",
              my: 2,
            }}
          >
            <Link href="/" className="mr1">
              <Typography variant="h6"> Sign in</Typography>
            </Link>
            <Typography variant="h6" sx={{ mx: 1 }}>
              |
            </Typography>
            <Link href="/">
              <Typography variant="h6">Register</Typography>
            </Link>
          </Box>
        </Box>
        <Divider variant="inset" sx={{ ml: 0 }} />
        {[
          "Home",
          "Categories",
          "Favourites",
          "My orders",
          "English | USD",
          "Contact us",
          "About",
          "User agreement",
          "Partnership",
          "Privacy policy",
        ].map((text, index) => {
          let icon;
          if (text == "Home") {
            icon = <HouseIcon />;
          } else if (text == "Categories") {
            icon = <FormatListBulleted />;
          } else if (text == "Favourites") {
            icon = <FavoriteBorder />;
          } else if (text == "My orders") {
            icon = <Inventory />;
          } else if (text == "English | USD") {
            icon = <Language />;
          } else if (text == "Contact us") {
            icon = <HeadsetMic />;
          } else if (text == "About") {
            icon = <BusinessIcon />;
          }
          return (
            <ListItem key={text} disablePadding >
              <Link
                style={{ width: "100%" }}
                href={"/" + text.toLocaleLowerCase()}
              >
                <ListItemButton >
                  <ListItemIcon>{icon}</ListItemIcon>
                 <Typography variant="h6" sx={{fontWeight:"bold"}}> <ListItemText primary={text} /></Typography>
                </ListItemButton>
                {(index === 6 || index === 3) && (
                  <Divider variant="inset" sx={{ ml: 0, mx: 1 }} />
                )}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Drawer sx={{ top: 55 }} open={open} onClose={() => toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}
