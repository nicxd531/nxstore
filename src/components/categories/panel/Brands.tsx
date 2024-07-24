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
import selectedBrands from "@/zustand/filter/selectedBrands";
import sendTheme from "@/zustand/sendTheme";


interface MyComponentProps {
  optionalStringArray?: string[];
}

function Brands({ optionalStringArray }: MyComponentProps) {
  const {selectedTheme}=sendTheme()
  const {selectedBrandsD,selectBrands}=selectedBrands()
  const [inProp, setInProp] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    selectBrands({
      ...selectedBrandsD,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <Box sx={{mb:2}}>
      <Box>
        <Divider variant="inset" sx={{ ml: 0 }} />
        <IconButton
          onClick={() => setInProp(!inProp)}
          sx={{
            borderRadius: 0,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: selectedTheme == "light" ? "black" : "white",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            Brands
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
              let Check
              if(data=="Samsung"){
                 Check = selectedBrandsD?.Samsung
              }else if(data=="Apple"){
                Check = selectedBrandsD?.Apple
              }else if(data=="Lenovo"){
                Check = selectedBrandsD?.Lenovo
              }else if(data=="Huawei"){
                Check = selectedBrandsD?.Huawei
              }else if(data=="Pocco"){
                Check = selectedBrandsD?.Pocco
              }
              return (
                <FormControlLabel
                  className="height-content"
                  key={index}
                  control={<Checkbox checked={Check} onChange={handleChange} color="secondary" name={data}/>}
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

export default Brands;
