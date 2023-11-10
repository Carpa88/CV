/* eslint-disable no-mixed-spaces-and-tabs */
import * as React from 'react';
import {Avatar, AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import {Menu as MenuIcon, ExitToApp} from '@mui/icons-material';
import { pages } from '../elements/menu';
import { CV_LINK } from '../elements/constants';
import Link from './../elements/Link';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton sx={{ p: 0, mr: 2, display: { xs: 'none', md: 'flex' }, }}>
            <Avatar alt="Volha Marozava" src="/static/images/avatar/2.jpg" />
          </IconButton>
          <Typography
						component='a'
						href={CV_LINK}
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Volga Marozava
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link to={page.url}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            <IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Volga Marozava
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
						{pages.map((page) => (
							<Link to={page.url} key={page.url}>
                <Button sx={{ my: 2, color: 'white', display: 'block', mr: 1 }}>
					        {page.title}
                </Button>
							</Link>
						))}
          </Box>
          <Link to='/singin'>
					<IconButton sx={{ my: 2, color: 'white', display: 'block', mr: 1 }}>
            
						  <ExitToApp />
            
					</IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;