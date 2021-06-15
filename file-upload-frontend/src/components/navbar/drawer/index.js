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

const DrawerComponent = () => {
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
              <ListItemText>Link 1</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem button divider>
            <ListItemIcon>
              <ListItemText>Link 2</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem button divider>
            <ListItemIcon>
              <ListItemText>Link 3</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem button divider>
            <ListItemIcon>
              <ListItemText>Link 4</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem button divider>
            <ListItemIcon>
              <ListItemText>Link 5</ListItemText>
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
