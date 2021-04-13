import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/components/footer.module.scss";

function footer(props) {
  return (
    <div className={styles.footer}>
      <Container fluid>
        <Row>
          <Col md="9"></Col>
          <Col md="3">
            <div className={styles.footerText}>
              {" "}
              Created by Ishaan and Aman{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default footer;
