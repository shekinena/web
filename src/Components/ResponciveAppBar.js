import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom'

const pages = ['contact', 'publications', 'thesis', 'about', 'home'];
const pagesReverse = [ 'home', 'about', 'thesis', 'publications', 'contact'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
	
  return (
    <AppBar elevation={0} position="static" style={{ background: 'white', marginBottom:'25px' }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						color={'black'}
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2,
							display: { xs: 'none', md: 'flex' },
							backroundColor:'none',
							Shadow:'none',
							borderBottom: '2px solid black'
						 }}
					>
						<a href='/'>SHEKINE NAINTI v.0.0.1</a>
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
							<IconButton
								style={{color: 'black'}}
								size="large"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								// color= "primary"
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
									horizontal: 'right',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' }
								}}
							>
								{pagesReverse.map((page) => (
									<NavLink to={`/${page}`}>
										<MenuItem key={page} onClick={handleCloseNavMenu}>
											<Typography textAlign="center">{page}</Typography>
										</MenuItem>
									</NavLink>
								))}
							</Menu>
						</Box>
						<Typography
							variant="h6"
							color={'black'}
							noWrap
							component="div"
							sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
						>
							<a href='/'>SHEKINE NAINTI</a>
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },flexDirection: 'row-reverse'}}>
							{pages.map((page) => (
								<NavLink to={`/${page}`}>
									<Button
										
										key={page}
										onClick={handleCloseNavMenu}
										sx={{ my: 2, color: 'black', display: 'block'}}
									>
										{page}
									</Button>
								</NavLink>
							))}
					</Box>
				</Toolbar>
			</Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;