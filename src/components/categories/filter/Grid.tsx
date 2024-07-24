"use client";
import { Box, Divider, IconButton, Stack } from "@mui/material";
import React from "react";
import WindowIcon from "@mui/icons-material/Window";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Form from "react-bootstrap/Form";
import toggleGrid from "../../../zustand/toggleGrid";
import sendTheme from "@/zustand/sendTheme";


function Grid() {
  const { selectedGrid, selectGrid } = toggleGrid();
  const {selectedTheme}=sendTheme()
  return (
    <Box
      sx={{
        display: "flex",
        alignItems:"center"
      }}
    >
      <Stack
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        sx={{ width: {lg:"340px"} }}
      >
        <FormGroup sx={{ display: { xs: "none", lg: "block" } }}>
          <FormControlLabel
            sx={{ width: "fit-content", m: 0 }}
            control={<Checkbox color="secondary" />}
            label="Verified-only"
          />
        </FormGroup>
        <Box sx={{ display: { xs: "none", lg: "block" }, width: "40%" }}>
          <Form.Select style={{ width: "100%" }} aria-label="Featured">
            <option>Featured</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Box>

        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "8px",
            bgcolor: "background.paper",
            color: "text.secondary",
          }}
        >
          <IconButton
            onClick={() => selectGrid("grid")}
            sx={{
              p: 1,
              color: selectedTheme == "light" ? "black" : "white",
              bgcolor: selectedGrid == "grid" ? "#DEE2E7" : "transparent",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
            }}
          >
            <WindowIcon
              sx={{
                width: { xs: "26px", lg: "20px" },
                height: { xs: "26px", lg: "20px" },
              }}
            />
          </IconButton>
          <Divider orientation="vertical" sx={{ height: "100%" }} />
          <IconButton
            onClick={() => selectGrid("list")}
            sx={{
              p: 1,
              color: selectedTheme == "light" && selectedGrid == "list" ? "black" : "white",
              bgcolor: selectedGrid == "list" ? "#DEE2E7" : "transparent",
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          >
            <CalendarViewDayIcon
              sx={{
                width: { xs: "26px", lg: "20px" },
                height: { xs: "26px", lg: "20px" },
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Grid;
