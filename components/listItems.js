import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <div>
  <ListSubheader inset>My Menu</ListSubheader>
    <ListItem disablePadding>
      <ListItemButton component="a" href="/MySkill">
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="My Skill"/>
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href="/EnterSkill">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Enter Skill"/>
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href="/MySkill">
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="*My Badge*"/>
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href="/MyCertification">
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="My Certification"/>
      </ListItemButton>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>My Team</ListSubheader>
    <ListItem disablePadding>
      <ListItemButton component="a" href="/MyTeam">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Team Skill"/>
      </ListItemButton>
    </ListItem>
  </div>
);
