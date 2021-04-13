import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/components/FAQ/FAQtop.module.scss";

const TopFAQ = (props) => {
  return (
    <div className={styles.topFAQ}>
      <Container fluid>
        <Row>
          <Col md="12">
            <p className={styles.topText}>
              Do you have questions you need answers to? Check out the FAQ
              section to see the answers of the most commonly asked questions.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopFAQ;
