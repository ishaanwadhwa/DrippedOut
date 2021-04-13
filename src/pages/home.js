import React from "react";
import {
  Route,
  Link,
  Redirect,
  NavLink,
  BrowserRouter,
} from "react-router-dom";
import Zoom from "react-reveal/Zoom";

import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/pages/home.module.scss";
import VideoPlay from "../components/videoPlayer";
import Footer from "../components/footer";
import ImageSlider from "../components/Collections/ImageSlider";
import { SliderData } from "../components/Collections/SliderData";
import ResponsivePlayer from "../components/Home/ResponsivePlayer";
import HomeTop from "../components/Home/HomeTop";
import SocialMediaIcons from "../components/Contact/SocialMediaIcons";
import Contact from "../pages/Contact";
import CustService from "../pages/customer_service";
import FAQ from "./FAQ";
import video from "../videos/maindrippedoutvideo.mp4";
import ImageCarousel from "../components/Collections/ImageCarousel";
import gif from "./DripBKG.mp4";

// const TABS = {
//   about: <About />,
//   product: <Product />,
//   contact: <Contact />,
// };

function Home(props) {
  const { url } = props;
  return (
    <BrowserRouter>
      <body>
        <nav className={styles.navbar}>
          <div className={styles.NavBarInner}>
            <div className={styles.NavbarLinks}>
              <a href="#home">Home</a>
              <a href="#customer_service">Customer Service
              {/* <ul className={styles.ulHover}>
               <li>   <a href="#customer_service">FAQ</a></li>
               <li>   <a href="#contact_us">Contact</a></li>
               
              </ul> */}
              </a>

              <a href="#community">Community</a>
              <a href="#blog">Blog</a>
            </div>
          </div>
          {/* <img
            src={gif}
            alt="jif"
            width="100%"
            height="50%"
            style={{ zIndex: "-100" }}
          /> */}
        </nav>

        <div className={styles.home}>
          
          <section
            id="home2"
            style={{
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <video
              width="100%"
              height="64%"
              style={{ zIndex: "0", marginTop : "40px" }}
              controls
              autoPlay
              muted

            >
              <source src={video} type="video/mp4" />
            </video>
            {/* <ResponsivePlayer /> */}
          </section>
          

          <section id="home" style={{ backgroundColor: " #8f2cd1" }}>
            <div className={styles.Home}>
            {/* <video
            width="100%"
            height="100%"
            style={{ zIndex: "100" }}
            controls={false}
            loop={false}
            autoPlay
            muted
          >
            <source src={gif} type="video/mp4" />
          </video> */}
              {/* <Container fluid>
              <Row>
                <Col md="12"> */}
              <HomeTop />
            </div>
            {/* </Col>
              </Row>
            </Container> */}
          </section>
          <section id="customer_service" style={{ backgroundColor: "#7ff850" }}>
            <FAQ />
          </section>
          <section
            id="contact_us"
            style={{ justifyContent: "flex-start", backgroundColor: "#ea3cc6" }}
          >
            <Contact />
          </section>
          <section
            id="community"
            style={{
              backgroundColor: "#2328f4",
              justifyContent: "flex-start",
            }}
          >
            <div className={styles.collection}>
              <div className={styles.sectionTitle}>Collections</div>
              {/* <ImageSlider slides={SliderData} /> */}
              <ImageCarousel />
            </div>{" "}
          </section>
          <section
            id="blog"
            style={{
              backgroundColor: "lightyellow",
            }}
          >
            Blog
          </section>
          <div className={styles.footer}>
            <Container fluid>
              <Row>
                <Col md="12">
                  <Footer />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </body>
    </BrowserRouter>
  );
}

export default Home;
