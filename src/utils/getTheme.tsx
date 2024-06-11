import { createTheme } from "@mui/material";
import sendTheme from "../zustand/sendTheme"

function getTheme() {
    const {selectedTheme}=sendTheme()
  const theme = createTheme({
    typography: {
      fontFamily:"Roboto Slab", // Change to your desired font family
    },
    palette: {
      primary: { 
        main: "#FFFFFF",
        light:"#000",
        dark:"#000"
     },
      secondary: { 
        main: "#0D6EFD",
        light:"#E3F0FF",
        dark:"#E3F0FF"
     },
     info:{
      main: "#EFF2F4",
      light:"#E3F0FF",
      dark:"#E3F0FF"
     },
      mode: selectedTheme ,
    },
  });
  return { theme};
}

export default getTheme;
