import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CSSTransition } from "react-transition-group";
import "./HeightTransition.css";
import Divider from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";

function PriceRange() {
  const [inProp, setInProp] = React.useState(true);
  const [value, setValue] = React.useState<number[]>([20, 500]);
  function valuetext(value: number) {
    return ` ${value}`;
  }

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  
  return (
    <Box sx={{mb:2}}>
      <Box>
        <Divider variant="inset" sx={{ ml: 0 }} />
        <IconButton
          onClick={() => setInProp(!inProp)}
          sx={{
            borderRadius: 0,
            color: "black",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography sx={{ fontWeight: "bold",fontSize:"1.3rem" }}>Price range</Typography>
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
        <Box sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}>
          <Slider
            className="imWidth"
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            min={0}
            max={1500}
            valueLabelDisplay="auto"
            color="secondary"
            getAriaValueText={valuetext}
            sx={{ width: "90%", mb: 1, mt: 1,mx:"auto" }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <TextField
              sx={{ width: "45%" }}
              value={value[0]}
              id="outlined-basic"
              variant="outlined"
            />
            <TextField
              sx={{ width: "45%" }}
              value={value[1]}
              type="number"
              id="outlined-basic"
              variant="outlined"
            />
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Button color="secondary" variant="contained" sx={{ mt: 2 }}>
                Apply
              </Button>
            </Box>
          </Box>
        </Box>
      </CSSTransition>
    </Box>
  );
}

export default PriceRange;
