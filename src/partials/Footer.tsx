import * as React from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import Logo from '../components/Logo';


// 
// Types
// 

interface LinkInterface {
  url: string;
  label: string;
};


// 
// Components
// 

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <MuiLink color="text.secondary" href="https://github.com/MAbdullahAhmad">
        Abdullah Ahmad
      </MuiLink>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}


// 
// Footer
// 

export default function Footer() {

  const gen_links = (links : LinkInterface[] ) => links.map(link_item => (
    <Link href={link_item.url} key={link_item.url} passHref style={{ textDecoration: 'none', color: 'inherit'}}>
      <Typography color="text.secondary" variant="body2">
        {link_item.label}
      </Typography>
    </Link>
  ));

  return (
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', sm: '60%' },
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
              <Logo />
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Working together.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Career Guide
            </Typography>
            {gen_links([
              {url: "/career-guide/overview", label: "Overview"},
              {url: "/career-guide/features", label: "Features"},
              {url: "/career-guide/demo", label: "Demo"},
              {url: "/career-guide/news", label: "News"},
              {url: "/career-guide/faqs", label: "FAQs"},
            ])}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Team
            </Typography>

            {gen_links([
              {url: "/about", label: "About us"},
              {url: "/team", label: "Team"},
            ])}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Legal
            </Typography>
            {gen_links([
              {url: "/terms", label: "Terms"},
              {url: "/privacy-policy", label: "Privacy Policy"},
              {url: "/contact", label: "Contact"},
            ])}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <div>
            {gen_links([
              {url: "/privacy-policy", label: "Privacy Policy"},
              {url: "/terms", label: "Terms of Service"},
            ])}
            <Copyright />
          </div>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: 'left', color: 'text.secondary' }}
          >
            <IconButton
              color="inherit"
              size="small"
              href="https://github.com/umt-dm"
              aria-label="GitHub"
              sx={{ alignSelf: 'center' }}
            >
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}