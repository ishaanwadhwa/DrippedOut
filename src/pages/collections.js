import React from "react";
import { Route, Link, Redirect, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/pages/collection.module.scss";

function Collections(props) {
  return (
    <div className={styles.collection}>
      <Container fluid>
        <Row>
          <Col md="12"> Collections</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Collections;
