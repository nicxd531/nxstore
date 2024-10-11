import React from "react";
import { Box, Stack, IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";
interface MyComponentProps {
  myString: string;
}
function Socials({ myString }: MyComponentProps) {
  return (
    <Stack
      alignItems={"center"}
      sx={{ width: { xs: "100%", lg: "70%" }, mt: 3 }}
    >
      <Divider sx={{ width: "100%" }}>or {myString} in with</Divider>

      <Stack
        sx={{ width: "70%", mt: 2 }}
        justifyContent={"space-around"}
        alignItems={"center"}
        direction={"row"}
      >
        <IconButton onClick={() => signIn("facebook")}>
          <Avatar sx={{ bgcolor: "#1877F2", cursor: "pointer" }}>
            <FontAwesomeIcon icon={faFacebookF} />
          </Avatar>
        </IconButton>
        <IconButton onClick={() => signIn("google")}>
          <Avatar sx={{ bgcolor: "#DB4437", cursor: "pointer" }}>
            <FontAwesomeIcon icon={faGoogle} />
          </Avatar>
        </IconButton>
        <IconButton  onClick={() => signIn("twitter")}>
          <Avatar sx={{ bgcolor: "black", cursor: "pointer" }}>
            <FontAwesomeIcon icon={faXTwitter} />
          </Avatar>
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default Socials;
