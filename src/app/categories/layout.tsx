import Breadcrumb from '@/components/categories/Breadcrumbs';
import { Box } from '@mui/material';
import React from 'react'

function CategoriesLayout({children}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <Box
    sx={{
      width: { xs: "100%", lg: "87%" },
      mx: { lg: 10 },
      mt: 2
    }}
    >
      <Breadcrumb/>
      {children}
      </Box>
  )
}

export default CategoriesLayout