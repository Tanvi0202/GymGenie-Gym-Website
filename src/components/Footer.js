import React from 'react'
import { Box, Stack, Typography } from '@mui/material'


const Footer = () => (
  <Box mt='80px' bgcolor='#FFF3F4'>
    <Stack
      gap='40px'
      sx={{ alignItems: 'center' }}
      flexWrap='wrap'
      px='40px'
      pt='24px'
    >
      <Typography
        variant='h5'
        sx={{ fontSize: { lg: '28px', xs: '20px' } }}
        mt='10px'
        textAlign='center'
        pb='2px'
        color='red'
        fontWeight={600}
      >
        GymGenie
      </Typography>
    </Stack>
    <Typography
      variant='h5'
      sx={{ fontSize: { lg: '28px', xs: '20px' } }}
      mt='20px'
      textAlign='center'
      pb='40px'
    >
      Where Fitness Meets Flexibility
    </Typography>
  </Box>
)

export default Footer
