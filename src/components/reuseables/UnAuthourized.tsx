import { Box } from '@mui/material'
import React from 'react'

function UnAuthourized() {
  return (
    <Box sx={{width:"100%",height:"100vh"}}>
        <img src="images/unAuthorized.png" style={{width:"100%",height:"100%",objectFit:"contain"}}/>
    </Box>
  )
}

export default UnAuthourized