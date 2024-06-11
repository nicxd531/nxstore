import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SubCategories from "../panel/SubCategories";
import Condition from "../panel/Condition";
import Features from "../panel/Features";
import PriceRange from "../panel/PriceRange";
import Ratings from "../panel/Ratings";
import Brands from "../panel/Brands";

export default function FilterBtn() {
  const subCatOptional = [
    "Mobile accessory",
    "Electronics",
    "Smartphones ",
    "Modern tech",
  ];
  const BrandsCatOptional = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];
  const featuresCatOptional = [
    "Metallic",
    "Plastic cover",
    "8GB Ram ",
    "Super power",
    "Large Memory",
  ];
  const conditionCatOptional = ["Any", "Refurbished", "Brand new", "Old items"];
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFullWidth(event.target.checked);
  };

  return (
    <Box sx={{
      width:"30%",
      display:{lg:"none"}
      }}>
      <Button
        sx={{
          width: "fit-content",
          color: "black",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          fontWeight:"bold",
          px:2

        }}
        variant="outlined"
        color="info"
        onClick={handleClickOpen}
        endIcon={<FilterAltOutlinedIcon />}
      >
        filters( 5 )
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Filter
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "100%",
            }}
          ><SubCategories optionalStringArray={subCatOptional} />
          <Brands optionalStringArray={BrandsCatOptional} />
          <Features optionalStringArray={featuresCatOptional} />
          <PriceRange />
          <Condition optionalStringArray={conditionCatOptional} />
          <Ratings />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
