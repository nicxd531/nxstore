import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
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
import sendTheme from "@/zustand/sendTheme";

interface myComponentProps {
  optionalStringArray?: string[];
}
function Condition({ optionalStringArray }: myComponentProps) {
  const { selectedTheme } = sendTheme();
  const [inProp, setInProp] = React.useState(true);

  return (
    <Box sx={{ mb: 2 }}>
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
            Condition
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
        {optionalStringArray ? (
          <FormControl color="secondary" sx={{ px: 2, width: "100%" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Refurbished"
              name="radio-buttons-group"
              color="secondary"
              sx={{ width: "100%", px: 2 }}
            >
              {optionalStringArray?.map((data, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={data}
                    control={<Radio color="secondary" />}
                    label={data}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <Typography>not Available </Typography>
          </Box>
        )}
      </CSSTransition>
    </Box>
  );
}

export default Condition;
