import { Container, Box, Button, Grid, Typography } from "@mui/material";
import img1 from "../images/landing-page-img.png";
import React from "react";
import "./home.css";

function home() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <Container maxWidth="lg" sx={{ marginBottom: 5, marginTop: 20 }}>
        <Box
          className="boxhome"
          sx={{
            flexGrow: 1,
            mt: 5,
            mb: 5,
          }}
        >
          <Grid
            className="boxitem"
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  className="homeText"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 700,
                    fontSize: { lg: "48px", xs: "34px" },
                    lineHeight: "133.69%",
                    color: "#1f2e35",
                    textAlign: { lg: "start", xs: "center" },
                  }}
                >
                  Making the most of the ever-growing
                </Typography>
                <Typography
                  className="hometred"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 700,
                    fontSize: { lg: "45px", xs: "34px" },
                    lineHeight: "133.69%",
                    color: "#ee4248",
                    textAlign: { lg: "start", xs: "center" },
                  }}
                >
                  Information Technology
                </Typography>
                <Typography
                  className="homesubtext"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 400,
                    fontSize: { lg: "20px", xs: "18px" },
                    marginTop: 3,
                    color: "#30444e",
                    textAlign: { lg: "start", xs: "center" },
                  }}
                >
                  Managed by a team of professional experts with extensive
                  experience and impressive track records
                </Typography>
                <Button
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="homebtn"
                  sx={{
                    fontFamily: "Poppins",
                    background: "#ee4248",
                    borderRadius: "4px",
                    color: "#ffffff",
                    padding: "12px 32px",
                    width: "161px",
                    height: "53px",
                    marginTop: 3,
                    marginBottom: 10,
                    boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
                    align: { lg: "start", xs: "center" },
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} align="center">
              <Box>
                <img src={img1} alt="Home-page" className="homeimg" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default home;
