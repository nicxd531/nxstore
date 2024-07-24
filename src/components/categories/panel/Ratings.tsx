import React, { useState } from "react";
import { Box, IconButton, Rating, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CSSTransition } from "react-transition-group";
import "./HeightTransition.css";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import sendTheme from "@/zustand/sendTheme";

function Ratings() {
  const { selectedTheme } = sendTheme();
  const [inProp, setInProp] = React.useState(true);

  return (
    <Box>
      <Box>
        <Divider variant="inset" sx={{ ml: 0 }} />
        <IconButton
          onClick={() => setInProp(!inProp)}
          sx={{
            borderRadius: 0,
            color: selectedTheme == "light" ? "black" : "white",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            Ratings
          </Typography>
          {inProp == false ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowUpIcon />
          )}
        </IconButton>
      </Box>
      <CSSTransition
        in={inProp}
        timeout={300}
        classNames="height"
        unmountOnExit
      >
        <FormControl color="secondary" sx={{ px: 2, width: "100%" }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Refurbished"
            name="radio-buttons-group"
            color="secondary"
            sx={{ width: "100%", px: 2 }}
          >
            <FormControlLabel
              required
              control={<Checkbox color="secondary" />}
              label={<Rating name="read-only" value={5} readOnly />}
            />
            <FormControlLabel
              required
              control={<Checkbox color="secondary" />}
              label={<Rating name="read-only" value={4} readOnly />}
            />
            <FormControlLabel
              required
              control={<Checkbox color="secondary" />}
              label={<Rating name="read-only" value={3} readOnly />}
            />
            <FormControlLabel
              required
              control={<Checkbox color="secondary" />}
              label={<Rating name="read-only" value={2} readOnly />}
            />
            <FormControlLabel
              required
              control={<Checkbox color="secondary" />}
              label={<Rating name="read-only" value={1} readOnly />}
            />
          </RadioGroup>
        </FormControl>
      </CSSTransition>
    </Box>
  );
}

export default Ratings;
