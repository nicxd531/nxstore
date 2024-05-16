import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function HomeSection5() {
  return (
    <Paper
      sx={{
        width: { xs: "100%", lg: "87%" },
        mx: { lg: 10 },
        height: { xs: "150px", lg: "446px" },
        mt: 2,
        position: "relative",
      }}
    >
      <img
        src="/images/hs5 cover image.png"
        alt="homesection 5 cover image "
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <Box sx={{ width: {xs:"100%",lg:"50%"}, height: "100%", p: 4, color: "white" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: { xs:"1.5rem",lg: "2.5rem" } ,width:{xs:"70%",lg:"70%"}}}>
            An easy way to send requests to all suppliers
          </Typography>
          <Typography sx={{ width: {lg:"80%"},fontSize: { lg: "1.2rem" },mt:2 ,display:{xs:"none",lg:"block"} }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </Typography>
          <Button
              sx={{ bgcolor: "secondary.main", width: "fit-content",display:{lg:"none"},mt:1 }}
              variant="contained"
            >
              {" "}
              Send inquiry
            </Button>
        </Box>
        <Box sx={{ width: "50%", height: "100%", p: 4,display:{xs:"none",lg:"inline"} }}>
          <Paper
            sx={{
              width: "100%",
              height: "100%",
              p: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem", mb: 1 }}>
              Send quote to suppliers
            </Typography>
            <Form.Select size="lg" aria-label="Default select example">
              <option>What item you need?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <br />
            <InputGroup style={{ width: "100%",height:"200px" }}>
              <Form.Control
                size="lg"
                rows={4}
                as="textarea"
                aria-label="With textarea"
                placeholder="Type more details"
              />
            </InputGroup>
            <br />
            <Box sx={{ display: "flex", width: "100%" }}>
              <Form.Select size="lg" className="me-3" style={{width:"40%"}}>
                <option>Quantity</option>
                <option>size</option>
                <option>number</option>
                <option>shape</option>
              </Form.Select>
              <Form.Select size="lg" style={{width:"20%"}}>
                <option>pcs</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Select>
            </Box>
            <br />
            <Button
              sx={{ bgcolor: "secondary.main", width: "fit-content" }}
              variant="contained"
            >
              {" "}
              Send inquiry
            </Button>
          </Paper>
        </Box>
      </Box>
    </Paper>
  );
}

export default HomeSection5;
