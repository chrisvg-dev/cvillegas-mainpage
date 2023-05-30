import React from 'react';
import Grid from '@mui/material/Grid';
//import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
//import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
//import { useTheme } from '@mui/material/styles';

const Footer = () => {
  //const theme = useTheme();
  //const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; cvillegas-dev.com. 2023. All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
