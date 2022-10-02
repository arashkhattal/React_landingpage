import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const PAGES = [
  "Home",
  "About me",
  "What I Do",
  "Portfolio",
  "My resume",
  "Blog",
  "Contact me",
];

const DrawerComp = () => {
  const [value, setValue] = useState();

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ width: "100vw" }}
      >
        <List sx={{ top: "100px" }}>
          {PAGES.map((page, index) => {
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>;
          })}
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      {/* <Box sx={{width:"100%",bgcolor:"#ffff",height:"90vh",top:"1ovh"}} open={openDrawer}
      onClose={()=>setOpenDrawer(false)}>

      </Box> */}
      <IconButton
        sx={{ color: "#1F2E35", marginLeft: "auto", marginTop: 3 }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
