import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import { Box, Stack } from "@mui/material";


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SortBtn() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{
    width:"30%",
    display:{lg:"none"}
  }}>
      <Button
        sx={{
          color: "black",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          fontWeight: "bold",
          width:"100%"
        }}
        endIcon={<SortOutlinedIcon />}
        color="info"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Sort:
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Sort by"}</DialogTitle>
        <DialogActions>
          <Stack direction="row" justifyContent="space-around">
            <Button color="secondary" sx={{mr:2}} variant="contained" onClick={handleClose}>
              newest
            </Button>
            <Button color="secondary" sx={{ml:2}}  variant="contained" onClick={handleClose}>
              oldest
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
