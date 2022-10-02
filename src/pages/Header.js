import React, { useState } from "react";
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import logo from "../images/logo.png";
import mail from "../images/mail.png";
import home from "../images/home.png";
import shuffle from "../images/shuffle.png";
import DrawerComp from "./DrawerComp";
import "./Header.css";

const PAGES = [
  "Home",
  "About me",
  "What I Do",
  "Portfolio",
  "My resume",
  "Blog",
  "Contact me",
];

const Header = () => {
  const [value, setValue] = useState();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <React.Fragment>
      <AppBar
        sx={{
          background: "#ffffff",
          color: "#1F2E35",
          minHeight: "15vh",
        }}
      >
        <Box>
          <Toolbar sx={{ justifyContent: "center" }}>
            <img
              src={logo}
              className="logo"
              alt="something"
              loading="lazy"
              sx={{ margin: 5 }}
            />

            {isMatch ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <>
                <Tabs
                  sx={{
                    marginTop: 2,
                    marginLeft: 20,
                    marginRight: 5,
                    fontfamily: "Popins",
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                  textColor="#fff"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  indicatorColor="primary"
                >
                  <Box sx={{ marginRight: 10 }} className="nav">
                    <Tab label="Services" />
                    <Tab label="Product" />
                    <Tab label="Technology" />
                    <Tab label="About" />
                    <Tab label="Client" />
                    <Tab label="Partner" />
                  </Box>
                  <img src={home} className="navicon one" />
                  <img src={mail} className="navicon" />
                  <img src={shuffle} className="navicon" />
                </Tabs>
              </>
            )}
          </Toolbar>
        </Box>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
