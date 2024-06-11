import { Box, Pagination, Stack } from '@mui/material'
import React from 'react'
import CatAppBar from '../CatAppBar'
import MainWindow from './MainWindow'
import data from "../../../data/AllData.json"
import PaginationBottom from './PaginationBottom'

interface myComponentProps{
  catName?:string,
  catItemsLenght?:number
}

function CatMainWin({catName,catItemsLenght}:myComponentProps) {
  // states for current page 
  const [currentPage, setCurrentPage] = React.useState(1);
  const [items, setitems] = React.useState(5);
  const itemsPerPage = items; // Set the number of items per page
  const totalPages = Math.ceil(data?.length / itemsPerPage);
  // data slicing constant for items on each page
  const FilteredData = data?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
  );
  return (
    <Stack
    justifyContent="space-between"
    sx={{
        width:{xs:"100%",lg:"80%"},
        px:{lg:1},
        maxHeight:"1350px"
    }}
    >
        <CatAppBar catName={catName} catItemsLenght={catItemsLenght}/>
        <MainWindow items={FilteredData}/>
        <PaginationBottom setCurrentPage={setCurrentPage} setitems={setitems} totalPages={totalPages}/>
    </Stack>
  )
}

export default CatMainWin