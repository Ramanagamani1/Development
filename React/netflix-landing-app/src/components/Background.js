import React from 'react';
import background from '../images/bg.jpeg';
import '../style/background.css';

export default function Background() {
  return (
    <img 
    className='background'
    src={background} 
    alt="background img"/>
  )
}
