import Breadcrumb from '@/components/categories/Breadcrumbs';
import { Box } from '@mui/material';
import React,{useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


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