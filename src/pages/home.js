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
import gif from "../videos/DripBKG.mp4";
import cs_bg from '../photos/black_crumpled.jpg';
import purp_bg from '../photos/bottom.jpg';
import FORM from './process';
import Process from './community2';
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
          

          <section id="home" style={{ backgroundColor: "white",
       }}>
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
          <section id='wrapper'
          style= {{
            // backgroundImage: `url(${cs_bg})`, backgroundRepeat : 'no-repeat',  backgroundSize : 'cover', backgroundPosition : "center"
            backgroundColor : 'white'
          }}
          >
          <section id="customer_service" 
          // style= {{backgroundImage: `url(${cs_bg})`, backgroundRepeat : 'no-repeat',  backgroundSize : 'cover', backgroundPosition : "center"}}
          >
            <FAQ />
          </section>
          <section
            id="contact_us"
            // style={{ justifyContent: "flex-start",backgroundImage: `url(${purp_bg})`, backgroundRepeat : 'no-repeat',  backgroundSize : 'cover', backgroundPosition : "center"  }}
          >

            <Contact />
          </section>
          </section>
          <section
            id="community"
            style={{
              backgroundColor: "white",
             display : "flex",
              // justifyContent : "flex-start",
              // alignItems : "center",
              height : "100vh",
            }}
          >
            <div className={styles.videoWrapper}>
 
 <video
             width="100vw"
              height="100%"
              style={{ zIndex: "0" }}
              autoPlay
              muted
              className= {styles.bgvideo}

            >
              <source src={gif} type="video/mp4" />
            </video>         
            <div className={styles.collection} style={{zIndex : '10'}}>

              <p className={styles.sectionTitles} style={{textAlign : 'center'}}>
               Collections</p>
              {/* <ImageSlider slides={SliderData} /> */}
              <ImageCarousel style={{zIndex : '10', width : '100vw'}}  />
            </div>{" "}
            </div>
          </section>
          <section id="community2" style={{backgroundColor: "white"}}>
              <Process />
          </section>
          <section
            id="blog"
            style={{
              backgroundColor: "white",
            }}
          >

            <div className={styles.contactForm}>
          
<FORM />
</div>
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
