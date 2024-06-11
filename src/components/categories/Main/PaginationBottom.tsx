import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { SelectChangeEvent } from "@mui/material/Select";
import Form from "react-bootstrap/Form";
import { Box } from "@mui/material";


interface myComponentProps {
  totalPages?: number;
  currentPage?: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setitems: React.Dispatch<React.SetStateAction<number>>;
}

export default function PaginationBottom({
  totalPages,
  currentPage,
  setCurrentPage,
  setitems,
}: myComponentProps) {
  const handleChange = (event: any) => {
    setitems(event.target.value);
  };

  return (
    <Stack
      direction="row"
      justifyContent={{ xs: "center", lg: "flex-end" }}
      spacing={2}
      sx={{ width: "100%" }}
    >
      <Box  sx={{ width: { xs: "30%", lg: "18%" } }}>
        <Form.Select
          aria-label="Default select example"
          style={{ width: "100%" }}
          onChange={(event) => handleChange(event)}
        >
          <option>select items per page</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </Form.Select>
      </Box>
      <Pagination
        variant="outlined"
        shape="rounded"
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => setCurrentPage(page)}
      />
    </Stack>
  );
}
