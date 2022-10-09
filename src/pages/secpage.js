import { Container, Box, Grid, Typography } from "@mui/material";
import img1 from "../images/sec-pafe-img.png";
import React from "react";
import "./secpage.css";

function secpage() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <Container maxWidth="lg">
        <Box
          sx={{
            height: { lg: "90vh", xs: "auto" },
            flexGrow: 1,
            margin: "auto",
            background: "#F7F7F7",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              display: "flex",
              flexDirection: "reverse-column",
              background: "#F7F7F7",
            }}
          >
            <Grid item xs={12} md={6}>
              <Box>
                <img
                  src={img1}
                  alt="Home-page"
                  className="secimg"
                  sx={{
                    marginTop: { lg: 0, xs: 6 },
                    height: { lg: "390px", xs: "auto" },
                    width: { xs: "fixed" },
                    background: "#F7F7F7",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  className="secpageText"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 500,
                    fontSize: { lg: "32px", xs: "32px" },
                    lineHeight: "133.69%",
                    color: "#1f2e35",
                    marginTop: { lg: 8, xs: 3 },
                    textAlign: { lg: "start", xs: "center" },
                  }}
                >
                  Welcome to <span>Dwidasa Samsara Indonesia (DSI)</span>
                </Typography>
                <Typography
                  className="secpagesubt1"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 400,
                    marginTop: 3,
                    fontSize: { lg: "18px", xs: "18px" },
                    lineHeight: "133.69%",
                    color: "#30444e",
                    background: "#F7F7F7",
                    textAlign: { lg: "start", xs: "center" },
                  }}
                >
                  Managed by a team of professional experts with extensive
                  experience and impressive track records,{" "}
                  <span sx={{ color: "#ee4248" }}>DSI</span> believes that
                  continuous improvements and innovations assure your business
                  to run effectively.
                </Typography>
                <Typography
                  className="secpagesubt2"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 400,
                    fontSize: { lg: "18px", xs: "18px" },
                    marginTop: 3,
                    color: "#30444e",
                    // background: "#F7F7F7",
                    textAlign: { lg: "start", xs: "center" },
                  }}
                >
                  Dwidasa Indonesia (DSI) was firstly established in
                  2010 by the founders, who each of them has a common end
                  objective to innovate new creations by making the most of the
                  ever-growing information technology through{" "}
                  <span sx={{ color: { xs: "#ee4248" } }}>DSI</span>s distinct
                  front-end based application concept.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default secpage;
