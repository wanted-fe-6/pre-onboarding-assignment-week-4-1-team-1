import React, { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import {
  Drawer,
  Toolbar,
  Divider,
  Typography,
  List,
  Collapse,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LogoutIcon from '@mui/icons-material/Logout';

function SideNavigation({ width, createClickMenuHandler }) {
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(prevOpen => !prevOpen);
  };

  // 로그아웃
  const onLogoutHandler = () => {
    localStorage.clear();
    alert('로그아웃이 완료되었습니다.');
    window.location.reload();
  }

  return (
    <Drawer
      variant="permanent"
      PaperProps={{ sx: { backgroundColor: palette.primary.dark, width, color: 'white' } }}
    >
      <Toolbar>
        <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>PREFACE</Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItemButton onClick={createClickMenuHandler('대쉬보드')}>
          <ListItemIcon sx={{ color: 'white' }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="대쉬보드" />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton onClick={handleClickOpen}>
          <ListItemIcon sx={{ color: 'white' }}>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="계좌 목록" />
          <ListItemIcon sx={{ color: 'white' }}>
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemIcon>
        </ListItemButton>
        <Collapse in={open}>
          <List>
            <ListItemButton sx={{ pl: 4 }} onClick={createClickMenuHandler('투자 계좌')}>
              <ListItemIcon sx={{ color: 'white' }}>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText primary="투자 계좌" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={createClickMenuHandler('사용자')}>
          <ListItemIcon sx={{ color: 'white' }}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="사용자" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon sx={{ color: 'white' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary='로그아웃'
            onClick={onLogoutHandler}
          />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default SideNavigation;
