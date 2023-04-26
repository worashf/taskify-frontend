import React from 'react'
 import {Box} from "@mui/material"
import SocialCard from '../components/footer/SocialCard'
const Footer = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height:"100px"
 
      
    }}>
        
    <SocialCard/>
   </Box>
  )
}

export default Footer