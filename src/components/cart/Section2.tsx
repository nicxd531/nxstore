import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ChatIcon from '@mui/icons-material/Chat';
import LockIcon from "@mui/icons-material/Lock";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

function Section2() {
  return (
    <Stack justifyContent="space-between" direction="row" sx={{ width: {xs:"100%",lg:"65%"}, mt: 3 ,display:{xs:"none",lg:"flex"}}}>
      <Stack direction="row" sx={{ width: "33%" }}>
        <Box sx={{ width: "30%" }}>
          <IconButton sx={{ bgcolor: "#DEE2E7" }}>
            <LockIcon
              sx={{ width: {xs:"20px",lg:"30px"}, height: {xs:"20px",lg:"30px"}, color: "#979797" }}
            />
          </IconButton>
        </Box>
        <Box sx={{ width: "70%" }}>
          <Typography sx={{fontSize:{xs:"0.9rem",lg:"1.3rem"},fontWeight:"bold"}}>Secure payment</Typography>
          <Typography>Have you ever finally just </Typography>
        </Box>
      </Stack>
      <Stack direction="row" sx={{ width: "33%" }}>
        <Box sx={{ width: "30%" }}>
          <IconButton sx={{ bgcolor: "#DEE2E7" }}>
            <ChatIcon
              sx={{ width: {xs:"20px",lg:"30px"}, height: {xs:"20px",lg:"30px"}, color: "#979797" }}
            />
          </IconButton>
        </Box>
        <Box sx={{ width: "70%" }}>
          <Typography sx={{fontSize:{xs:"0.9rem",lg:"1.3rem"},fontWeight:"bold"}}>Customer support</Typography>
          <Typography>Have you ever finally just </Typography>
        </Box>
      </Stack>
      <Stack direction="row" sx={{ width: "33%" }}>
        <Box sx={{ width: "30%" }}>
          <IconButton sx={{ bgcolor: "#DEE2E7" }}>
            <AirportShuttleIcon
              sx={{ width: {xs:"20px",lg:"30px"}, height: {xs:"20px",lg:"30px"}, color: "#979797" }}
            />
          </IconButton>
        </Box>
        <Box sx={{ width: "70%" }}>
          <Typography sx={{fontSize:{xs:"0.9rem",lg:"1.3rem"},fontWeight:"bold"}}>Free delivery</Typography>
          <Typography>Have you ever finally just </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Section2;
