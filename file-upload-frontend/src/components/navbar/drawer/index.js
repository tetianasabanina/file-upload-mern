import React, { useState } from 'react';

import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  menuIconContainer: {
    marginLeft: 'auto'
  }
}));

const DrawerComponent = ({ firstLink, secondLink, thirdLink }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="left"
      >
        <List>
          <ListItem button divider>
            <ListItemIcon>
              <ListItemText>{firstLink}</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem button divider>
            <ListItemIcon>
              <ListItemText>{secondLink}</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem button divider>
            <ListItemIcon>
              <ListItemText>{thirdLink}</ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        className={classes.menuIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
