import React from "react";
import { Route, Link, Redirect, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/pages/customerservice.module.scss";
import CustLeft from "../components/Customer_Service/customer_service_left";
const customerService = () => {
  return (
    <div className={styles.customerService}>
      <Container fluid>
        <Row>
          <Col md="9">
            <CustLeft />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default customerService;
