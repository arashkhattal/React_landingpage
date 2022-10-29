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
          fontSize: "14px",
          fontFamily: "Poppins",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        Copyright © 20222 - <span>Dwidasa Samsara Indonesia</span>
      </Typography>
    </div>
  );
}

export default footer;
