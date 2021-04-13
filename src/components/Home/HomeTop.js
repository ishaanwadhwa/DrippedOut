import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/components/Home/HomeTop.module.scss";
import yeezy from "../../photos/yeezy.png";
import { Zoom, Fade } from "react-reveal";
import { useSpring, animated, Transition } from "react-spring";
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const HomeTop = (props) => {
  const [propsNew, spring] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className={styles.HomeTop}>
      <Container fluid>
        <Row>
          <Col md="6">
            <Fade left>
              <div className={styles.sectionTitle}>ABOUT US.</div>
              <div className={styles.sectionText}>
                We are a sneaker and apparel customization platform, offering
                services in customizing and revamping sneakers and apparel by a
                team of artists, all with a high skill set. Being a part of the
                Dripped Out community allows you to pay patronage to small scale
                artists who are eager to bring your design to life. Want to own
                merch that looks and feels exactly the way you desire? Here at
                Dripped Out you can quickly choose the design of your choice and
                get your sneakers and apparel customized from our highly skilled
                artists, all it takes is a short message to us and we can turn
                your imagination into reality.
              </div>
              <div className={styles.midSection}>
                <Row>
                  <Col md="12">
                    <div className={styles.sectionTitle}>OUR STORY.</div>
                    <div className={styles.sectionText}>
                      Dripped Out started as a passion project by two Fashion
                      Communication students who embarked on a journey of
                      personalization. After in-depth understanding of emotional
                      branding and the niche market, we started working towards
                      establishing a platform to uplift small scale artists,
                      designers and photographers. The main driving force was -
                      "new without buying new".
                    </div>
                  </Col>
                  {/* <Col md="6">
                    <div className={styles.sectionSubTitle}>Our Objective</div>
                    <div className={styles.sectionText}>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </div>
                  </Col> */}
                </Row>
              </div>
            </Fade>
          </Col>
          <Col md="6">
            <Fade right>
              <div className={styles.ImageWrapper}>
                <img className={styles.HomeImage} src={yeezy} alt="yeezy" />

                {/* <animated.div
                    class={styles.card}
                    onMouseMove={({ clientX: x, clientY: y }) =>
                      spring.set({ xys: calc(x, y) })
                    }
                    onMouseLeave={() => spring.set({ xys: [0, 0, 1] })}
                    style={{ transform: propsNew.xys.interpolate(trans) }}
                  /> */}

                {/* <animated.div
                    class={styles.card2}
                    style={{ transform: propsNew.xy.interpolate(trans4) }}
                  />
                  <animated.div
                    class={styles.card1}
                    style={{ transform: propsNew.xy.interpolate(trans2) }}
                  /> */}

                {/* <animated.div
                    class="card3"
                    style={{ transform: props.xy.interpolate(trans3) }}
                  />
                  <animated.div
                    class="card4"
                    style={{ transform: props.xy.interpolate(trans4) }}
                  /> */}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeTop;
