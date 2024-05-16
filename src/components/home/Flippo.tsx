"use client"
import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

function Flippo() {
  return (
   <FlipClockCountdown className='flip-clock' dividerStyle={{  height: 0 }}showSeparators={false} to={new Date().getTime() + 72 * 3600 * 1000 + 5000} />
  )
}

export default Flippo;
