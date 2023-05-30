import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  //const { mode } = theme.palette;
  const {
    landings: landingPages,
    company: companyPages,
    /*account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,*/
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 150, md: 170 }}
        style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}
      >
        CVILLEGAS-DEV
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'Projects'}
            id={'landing-pages'}
            items={landingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Contact'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <Box
            display={'flex'}
            component="a"
            href="/about"
            title="theFront"
            width={{ xs: 60, md: 60 }}
            style={{ textDecoration: 'none', color: 'white'}}
          >
            About
          </Box>
        </Box>
        <Box marginLeft={4}>
          <Box
            display={'flex'}
            component="a"
            href="/contact-page-cover"
            title="theFront"
            width={{ xs: 70, md: 70 }}
            style={{ textDecoration: 'none', color: 'white'}}
          >
            Contact
          </Box>
        </Box>
        <Box marginLeft={4}>
          <Box
            display={'flex'}
            component="a"
            href="/portfolio"
            title="theFront"
            width={{ xs: 70, md: 70 }}
            style={{ textDecoration: 'none', color: 'white'}}
          >
            Portfolio
          </Box>
        </Box>
        
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
