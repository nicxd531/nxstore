import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CSSTransition } from "react-transition-group";
import "./HeightTransition.css";
import Divider from "@mui/material/Divider";

interface MyComponentProps {
  optionalStringArray?: string[];
}

function SubCategories({ optionalStringArray }: MyComponentProps) {
  const [inProp, setInProp] = React.useState(true);

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
          <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            Categories
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
          <FormGroup sx={{ ml: 3 }}>
            {optionalStringArray?.map((data, index) => {
              return (
                <FormControlLabel
                  className="height-content"
                  key={index}
                  control={<Checkbox color="secondary" />}
                  label={data}
                />
              );
            })}
          </FormGroup>
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

export default SubCategories;
