import React from "react";
import { Route, Link, Redirect, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/pages/contact.module.scss";
import CustLeft from "../components/Customer_Service/customer_service_left";
import SocialMedia from "../components/Contact/SocialMediaIcons";
import { Zoom, Fade } from "react-reveal";
import lineShoe from '../photos/lineShoe.png';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Container fluid>
        <Row>
          <Col md="12">
            <div className={styles.ContactInner}>
              <Row>
                <Col md="8">
                  <div>
                    <Fade left>
                      <CustLeft />
                    </Fade>
                  </div>
                </Col>
                <Col md="4">
                  <div className={styles.contactRight} style={{ backgroundImage: `url(${lineShoe})` }}

>
                    <Fade right>
                      <SocialMedia />
                    </Fade>
                
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
