import { Box, Container, Button, Grid, Typography } from "@mui/material";
import logo from "../images/logo.png";
import silver from "../images/comp1.png";
import net from "../images/comp2.png";
import java from "../images/comp3.png";
import ios from "../images/comp4.png";
import android from "../images/comp5.png";
import bb from "../images/comp6.png";
import React from "react";

function fourthpage() {
  return (
    <div>
      <Container maxWidth="lg">
        <Box
          sx={{
            mb: 4,
            mt: 4,
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ display: "flex", flexDirection: "reverse-column" }}
          >
            <Grid item xs={12} md={4}>
              <Box data-aos="fade-up" data-aos-duration="1000">
                <img
                  src={logo}
                  alt="Home-page"
                  sx={{
                    marginLeft: "131px",
                  }}
                />
                <Typography
                  className="ph"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 900,
                    fontSize: { lg: "18px", xs: "18px" },
                    lineHeight: "133.69%",
                    color: "#263238;",
                    marginTop: 1,
                  }}
                >
                  PT Dwidasa Samsara Indonesia
                </Typography>
                <Typography
                  className="ph"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 200,
                    fontSize: { lg: "18px", xs: "18px" },
                    lineHeight: "133.69%",
                    color: "#263238;",
                    marginTop: 1,
                  }}
                >
                  Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang
                  15323
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box data-aos="fade-up" data-aos-duration="1000">
                <Typography
                  className="ph"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 900,
                    fontSize: { lg: "24px", xs: "24px" },
                    lineHeight: "133.69%",
                    color: "#263238;",
                    marginTop: 1,
                  }}
                >
                  Contact
                </Typography>
                <Typography
                  className="ph"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 300,
                    fontSize: { lg: "18px", xs: "18px" },
                    lineHeight: "26.85px",
                    color: "#263238;",
                    marginTop: 3,
                  }}
                >
                  Phone : +62.21.5314.1135 <br></br>Fax : +62.21.5314.1135 Email
                  : community@Dwidasa.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{ marginTop: 3 }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={silver}
                  alt="Home-page"
                  sx={{
                    marginLeft: "131px",
                  }}
                />
                <img
                  src={net}
                  alt="Home-page"
                  sx={{
                    marginLeft: "131px",
                  }}
                />
                <img
                  src={java}
                  alt="Home-page"
                  sx={{
                    marginLeft: "131px",
                  }}
                />
                <img
                  src={ios}
                  alt="Home-page"
                  sx={{
                    marginLeft: "131px",
                  }}
                />
                <img
                  src={android}
                  alt="Home-page"
                  sx={{
                    marginLeft: "131px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default fourthpage;
