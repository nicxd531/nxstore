"use client"
import React,{useState,useEffect} from 'react'
import { Box } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress';


function LoadingPage() {
    const [progress, setProgress] = React.useState(10);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress color="secondary" variant="determinate" value={progress} />
      </Box>
    );
  }

export default LoadingPage