import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, Button, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../icons/bell';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { Users as UsersIcon } from '../icons/users';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from 'react';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const appStates = ['signedIn', 'signedOut'];
  const [isLogIn, setLogIn] = useState(false);
  
  const handleLog = () => {

  }
  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          
          <Box sx={{ flexGrow: 1 }} />
          {isLogIn ? 
          <Tooltip title="Log out">
            <IconButton sx={{ ml: 1 }}
              onClick={handleLog}
            >
              <PowerSettingsNewIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          : 
          <>
            <Button href='/login'>
              Sign In
            </Button>
            <Button href='/register'>
              Sign Up
            </Button>
          </>
          }
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
