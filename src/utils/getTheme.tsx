import React from "react";
import { createTheme } from "@mui/material";
import sendTheme from "../zustand/sendTheme"

function getTheme() {
    const {selectedTheme}=sendTheme()
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto", // Change to your desired font family
    },
    palette: {
      primary: { 
        main: "#fff",
        light:"#000",
        dark:"#000"
     },
      mode: selectedTheme ,
    },
  });
  return { theme};
}

export default getTheme;
