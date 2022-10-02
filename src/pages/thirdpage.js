import { Box, Container, Button, Grid, Typography } from "@mui/material";
import img1 from "../images/product-description 1.png";
import img2 from "../images/product-description 2.png";
import img3 from "../images/product-description 3.png";
import React from "react";
import "./third.css";

function thirdpage() {
  return (
    <div className="tmain">
      <Container maxWidth="lg">
        <Box
          sx={{
            height: "100%",
            flexGrow: 1,
            margin: "auto",
          }}
        >
          <Typography
            className="mainhead"
            sx={{
              fontFamily: "Poppins",
              fontStyle: "Normal",
              fontWeight: 600,
              fontSize: { lg: "32px", xs: "32px" },
              lineHeight: "133.69%",
              color: "#1f2e35",
              textAlign: "center",
              marginBottom: 4,
              marginTop: 4,
            }}
          >
            Product and Service
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ display: "flex", flexDirection: "reverse-column" }}
          >
            <Grid item xs={12} md={4}>
              <Box data-aos="fade-up" data-aos-duration="1000">
                <img
                  src={img1}
                  alt="Home-page"
                  className="pimg1"
                  sx={{
                    marginLeft: "131px",
                  }}
                />
                <Typography
                  className="ph"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 500,
                    fontSize: { lg: "28px", xs: "28px" },
                    lineHeight: "133.69%",
                    color: "#EE4248",
                    textAlign: { xs: "center", lg: "start" },
                    marginTop: 2,
                  }}
                >
                  Our Product
                </Typography>
                <Typography
                  className="pd"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 500,
                    fontSize: { lg: "18px", xs: "18px" },
                    lineHeight: "133.69%",
                    color: "#30444E",
                    textAlign: { xs: "center", lg: "start" },
                    marginTop: 2,
                  }}
                >
                  Our product is made on the base of our teams careful research
                  and analyses, ranging from internet based application.
                </Typography>
                <Button
                  className="pb"
                  sx={{
                    marginTop: 2,
                    marginBottom: 5,
                    Padding: "8px 16px 8px 16px",
                    fontFamily: "Poppins",
                    background: "#ee4248",
                    borderRadius: "4px",
                    color: "#ffffff",
                    padding: "12px 32px",
                    width: "161px",
                    height: "53px",
                    marginTop: 3,
                    boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box data-aos="fade-up" data-aos-duration="1000">
                <img
                  src={img2}
                  alt="Home-page"
                  className="pimg1"
                  sx={{
                    marginTop: 6,
                  }}
                />
                <Typography
                  className="ph"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 500,
                    fontSize: { lg: "28px", xs: "28px" },
                    lineHeight: "133.69%",
                    color: "#EE4248",
                    textAlign: { xs: "center", lg: "start" },
                    marginTop: 2,
                  }}
                >
                  Our Service
                </Typography>
                <Typography
                  className="pd"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 500,
                    fontSize: { lg: "18px", xs: "18px" },
                    lineHeight: "133.69%",
                    color: "#30444E",
                    textAlign: { xs: "center", lg: "start" },
                    marginTop: 2,
                  }}
                >
                  DSIs shared service solutions focus on the front-end based
                  software development, designed specifically for the banking
                  and financial sectors.
                </Typography>
                <Button
                  className="pb"
                  sx={{
                    marginTop: 2,
                    marginBottom: 5,
                    Padding: "8px 16px 8px 16px",
                    fontFamily: "Poppins",
                    background: "#ee4248",
                    borderRadius: "4px",
                    color: "#ffffff",
                    padding: "12px 32px",
                    width: "161px",
                    height: "53px",
                    marginTop: 3,
                    boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box data-aos="fade-up" data-aos-duration="1000">
                <img src={img3} alt="Home-page" className="pimg1" />
                <Typography
                  className="ph"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 500,
                    fontSize: { lg: "28px", xs: "28px" },
                    lineHeight: "133.69%",
                    color: "#EE4248",
                    textAlign: { xs: "center", lg: "start" },
                    marginTop: 2,
                  }}
                >
                  Our Technology
                </Typography>
                <Typography
                  className="pd"
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "Normal",
                    fontWeight: 500,
                    fontSize: { lg: "18px", xs: "18px" },
                    lineHeight: "133.69%",
                    color: "#30444E",
                    textAlign: { xs: "center", lg: "start" },
                    marginTop: 2,
                  }}
                >
                  First JAVA, runs on more than 850 million personal computers
                  worldwide, and on billions of devices worldwide, including
                  mobile and TV devices.
                </Typography>
                <Button
                  className="pb"
                  sx={{
                    justify: "center",
                    marginTop: 2,
                    marginBottom: 5,
                    Padding: "8px 16px 8px 16px",
                    fontFamily: "Poppins",
                    background: "#ee4248",
                    borderRadius: "4px",
                    color: "#ffffff",
                    padding: "12px 32px",
                    width: "161px",
                    height: "53px",
                    marginTop: 3,
                    boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default thirdpage;
