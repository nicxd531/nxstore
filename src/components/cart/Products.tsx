import {
  Stack,
  Box,
  Typography,
  Button,
  Divider,
  ButtonGroup,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import LongMenu from "./LongMenu";

interface myComponentProp {
  data: data;
}
interface data {
  name: string;
  image: string;
  Size: string;
  Color: string;
  Material: string;
  Seller: string;
  quantity: number;
  price: number;
}

function Products({ data }: myComponentProp) {
  const [Qty, setQTy] = useState(1);

  const handleChange = (event: SelectChangeEvent) => {
    setQTy(event.target.value as number);
  };
  return (
    <Box sx={{ mb: 2, maxHeight: { xs: "150px", lg: "100px" }, mt: 2,width:"100%" }}>
      <Stack
        justifyContent="space-between"
        direction="row"
        sx={{ width: "100%" }}
        flexWrap="wrap"
      >
        <Box
          sx={{
            height: {xs:"100px",lg:"70px"},
            width: { xs: "20%", lg: "10%" },
            border: "1px solid #E0E0E0",
            borderRadius: "5px",
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            alt="product image"
            src={data.image}
          />
        </Box>
        <Stack sx={{ width: { xs: "65%", lg: "70%" } }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", mb: 1 }}>
            {data.name}
          </Typography>
          <Stack
            justifyContent="space-between"
            className="text-muted"
            direction="row"
            sx={{ width: "70%" }}
            flexWrap={{xs:"wrap"}}
          >
            <Typography>Size:{data.Size}</Typography>
            <Typography>Color:{data.Color}</Typography>
            <Typography>Material:{data.Material}</Typography>
            <Typography>Seller:{data.Seller}</Typography>
          </Stack>
        </Stack>
        <Box sx={{width:"10%",display:{lg:"none"}}}>
          <LongMenu/>
        </Box>

        <Stack
          direction={{ xs: "row", lg: "column" }}
          justifyContent={{ xs: "space-between" }}
          alignItems={{ xs: "center" }}
          sx={{ width: { xs: "100%%", lg: 123 } }}
        >
          <Stack sx={{ display: { xs: "flex", lg: "none" },mr:25}}>
            <ButtonGroup
              sx={{ color: "black", borderColor: "#DEE2E7" }}
              color="secondary"
              variant="outlined"
              aria-label="Basic button group"
            >
              <Button
                sx={{
                  color: "black",
                  borderColor: "#DEE2E7",
                  fontSize: "1.3rem",
                }}
              >
                -
              </Button>
              <Button
                sx={{
                  color: "black",
                  borderColor: "#DEE2E7",
                  fontSize: "1.3rem",
                }}
              >
                {Qty}
              </Button>
              <Button
                sx={{
                  color: "black",
                  borderColor: "#DEE2E7",
                  fontSize: "1.3rem",
                }}
              >
                +
              </Button>
            </ButtonGroup>
          </Stack>
          <Typography
            sx={{
              textAlign: "end",
              fontWeight: "bold",
              mb: 1,
              fontSize: { xs: "1.2rem" },
            }}
          >
            ${data.price}
          </Typography>
          <Box sx={{ minWidth: "100%", display: { xs: "none", lg: "flex" } }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Qty</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Qty}
                label="Qty"
                onChange={handleChange}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent={{ lg: "space-between" }}
        sx={{
          width: { xs: "100%", lg: "23%" },
          ml: 12,
          display: { xs: "none", lg: "flex" },
        }}
      >
        <Button sx={{ color: "#FA3434" }} size="small" variant="contained">
          Remove
        </Button>
        <Button
          sx={{ color: "secondary.main" }}
          size="small"
          variant="contained"
        >
          Save for later
        </Button>
      </Stack>
      <Divider sx={{ mt: 1, border: "1px" }} />
    </Box>
  );
}

export default Products;
