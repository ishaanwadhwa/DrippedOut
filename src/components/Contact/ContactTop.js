import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/components/Contact/contactTop.module.scss";

const ContactTop = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <div className={styles.title}>CONTACT.</div>
          <div className={styles.text}>
            Contact us and get your quote within a day's time
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ContactTop;
