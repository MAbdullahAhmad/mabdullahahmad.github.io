// 
// Imports
// 

import * as React from 'react';
import Link from 'next/link';

import { alpha, styled } from '@mui/material/styles';
import { PaletteMode } from '@mui/material/styles';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import GitHubIcon from '@mui/icons-material/GitHub';

import Logo from '../components/Logo';
import navigation from '../dist/navigation.json';


// 
// Data Types
// 

interface ToggleColorModeProps extends IconButtonProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

interface ApplicationTopBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}


// 
// Components
// 

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

function ToggleColorMode({
  mode,
  toggleColorMode,
  ...props
}: ToggleColorModeProps) {
  return (
    <IconButton
      onClick={toggleColorMode}
      color="primary"
      size="small"
      aria-label="Theme toggle button"
      {...props}
    >
      {mode === 'dark' ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )}
    </IconButton>
  );
}


// 
// Application Top Bar
// 

export default function ApplicationTopBar({
  mode,
  toggleColorMode,
} : ApplicationTopBarProps ) {

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="relative"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>

          {/* Desktop */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Logo />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navigation.map(nav_link => (
                <Link key={nav_link.url} href={nav_link.url} passHref style={{ textDecoration: 'none', color: 'inherit'}}>
                  <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                    {nav_link.label}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
          
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
              mx: 1,
            }}
          >
            {/* <ToggleColorMode
                data-screenshot="toggle-mode"
                mode={mode}
                toggleColorMode={toggleColorMode}
              /> */}
              
            <Button color="primary" variant="contained" size="small" href="https://github.com/umt-dm" startIcon={<GitHubIcon />}>
              GitHub
            </Button>
          </Box>

          {/* Mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)} 
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                {/* <Divider sx={{ my: 3 }} /> */}

                {navigation.map(nav_link => (
                  <Link key={nav_link.url} href={nav_link.url} passHref style={{ textDecoration: 'none', color: 'inherit'}}>
                    <MenuItem>{nav_link.label}</MenuItem>
                  </Link>
                ))}
                <MenuItem>
                  {/* <ToggleColorMode
                    data-screenshot="toggle-mode"
                    mode={mode}
                    toggleColorMode={toggleColorMode}
                    style={{ width: '100%' }}
                  /> */}
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="contained" href="https://github.com/umt-dm" startIcon={<GitHubIcon />} style={{ width: '100%' }}>
                    GitHub
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>

        </StyledToolbar>
      </Container>
    </AppBar>
  );
}