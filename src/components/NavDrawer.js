import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { GitHub, Twitter } from "@material-ui/icons";

const useStyles = makeStyles({
  list: {
    width: 180
  },
  info: {
    "text-align": "center",
    "font-weight": "bold"
  }
});

const NavDrawer = props => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      open={props.drawerOpened}
      onClose={props.toggleDrawer(false)}
    >
      <div
        className={classes.list}
        onClick={props.toggleDrawer(false)}
        onKeyDown={props.toggleDrawer(false)}
      >
        <List>
          <ListItem className={classes.info}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component="a" href="https://github.com/frekans7">
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component="a" href="https://twitter.com/frekans7">
            <ListItemIcon>
              <Twitter />
            </ListItemIcon>
            <ListItemText primary="Twitter" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};
export default NavDrawer;
