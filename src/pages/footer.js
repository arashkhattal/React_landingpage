import { Container, Box, Button, Grid, Typography } from "@mui/material";
import { height } from "@mui/system";
import "./footer.css";

import React from "react";

function footer() {
  return (
    <div className="bg">
      <Typography
        className="text"
        sx={{
          fontFamily: "Poppins",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        Copyright © 2015 - <span>Dwidasa Samsara Indonesia</span>
      </Typography>
    </div>
  );
}

export default footer;
