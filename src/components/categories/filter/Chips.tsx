"use client";
import React, { useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import selectedBrands from "@/zustand/filter/selectedBrands";
import Chip from "@mui/material/Chip";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function Chips() {
  const { selectedBrandsD, selectBrands } = selectedBrands();
  const handleClearFilter = () => {
    selectBrands({
      Samsung: false,
      Apple: false,
      Lenovo: false,
      Pocco: false,
      Huawei: false,
    });
  };
  const handleDeleteBrand = (cat: string) => {
      selectBrands({
        ...selectedBrandsD,
        [cat]: false,
      });
  };
  const style = {
    borderRadius: 2,
    fontSize: "1rem",
    borderColor: "secondary.main",
    mr:1
  };
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease", once: false });
  });
  return (
    <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
      <Stack
        spacing={1}
        direction="row"
        flexWrap="wrap"
        sx={{
          minWidth: {xs:"70%",lg:"85%"},
          overflowX: "auto",
          px: 1,
          whiteSpace: "nowrap",
        }}
        className="scroll scroll-bar"
      >
        <Box sx={{ minWidth: "100%", display: "flex", justifyContent: "space-between", p: 1 }}>
          {selectedBrandsD?.Samsung && (
            <Chip
            
              data-aos="zoom-in"
              sx={style}
              label="Samsung"
              variant="outlined"
              onDelete={() => handleDeleteBrand("Samsung")}
            />
          )}
          {selectedBrandsD?.Apple && (
            <Chip
              data-aos="zoom-in"
              sx={style}
              label="Apple"
              variant="outlined"
              onDelete={() => handleDeleteBrand("Apple")}
            />
          )}
          {selectedBrandsD?.Huawei && (
            <Chip
              data-aos="zoom-in"
              sx={style}
              label="Huawei"
              variant="outlined"
              onDelete={() => handleDeleteBrand("Huawei")}
            />
          )}
          {selectedBrandsD?.Pocco && (
            <Chip
              data-aos="zoom-in"
              sx={style}
              label="Pocco"
              variant="outlined"
              onDelete={() => handleDeleteBrand("Pocco")}
            />
          )}
          {selectedBrandsD?.Lenovo && (
            <Chip
              data-aos="zoom-in"
              sx={style}
              label="Lenovo"
              variant="outlined"
              onDelete={() => handleDeleteBrand("Lenovo")}
            />
          )}
        </Box>
      </Stack>
      <Button color="secondary" onClick={handleClearFilter}>
        Clear All filter
      </Button>
    </Stack>
  );
}

export default Chips;
