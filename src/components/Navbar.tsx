import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button, Divider, IconButton, InputBase, SwipeableDrawer, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LloydsLogo from "../assets/LloydsLogo.png"
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(): JSX.Element {
    const theme = useTheme();
    const isWindowLessThanSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ height: '64px' }}>
                    <Box display={'inline-flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                        <Box display={'inline-flex'} alignItems={'center'}>
                            <IconButton onClick={() => setIsDrawerOpen(true)} sx={{ marginRight: '10px', color: '#FFF' }}>
                                <MenuIcon />
                            </IconButton>
                            <Box sx={{ display: 'flex', alignItems: 'center', width: '200px', border: '1px solid #ccc', borderRadius: '4px', padding: '2px' }}>
                            <SearchIcon />
                                <InputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    sx={{ ml: 1, flex: 1, color: '#FFF' }}
                                />
                            </Box>
                        </Box>
                        <Box display={'inline-flex'} gap={1}>
                            <Box display={'inline-flex'} alignItems={'center'}>
                                <IconButton sx={{ color: '#FFF' }}>
                                    <NotificationsActiveIcon />
                                </IconButton>
                                <IconButton sx={{ color: '#FFF' }}>
                                    <AccountCircleIcon />
                                </IconButton>
                            </Box>
                            <Box>
                                <img src={LloydsLogo} alt="Lloyds Logo" style={{width: '50px', height: '50px'}}/>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} onOpen={() => setIsDrawerOpen(true)} >
                <Box width={isWindowLessThanSmall? '100vw' : '300px'} height={'100vh'} display={'inline-flex'} flexDirection={'column'}>
                    <Typography variant="h6" component="div" sx={{ padding: '10px' }}>
                        GLMS V.01
                    </Typography>
                    <Divider />
                    <Button onClick={() => setIsDrawerOpen(false)} component={NavLink} to='/' startIcon={<DashboardIcon/>} variant='text' color='inherit' sx={{ justifyContent: 'flex-start', paddingLeft: '20px' }}>Dashboard</Button>
                    <Button onClick={() => setIsDrawerOpen(false)} component={NavLink} to='/EEAPassports' startIcon={<DataObjectIcon/>} variant='text' color='inherit' sx={{ justifyContent: 'flex-start', paddingLeft: '20px' }}>EEA Passports</Button>
                </Box>
            </SwipeableDrawer>
        </>
    );
}