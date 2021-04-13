import React from "react";
import { Route, Link, Redirect, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/pages/faq.module.scss";
import TopText from "../components/FAQ/TopFAQ";
import questionImage from "../photos/question.png";

const FAQ = (props) => {
  return (
    <div className={styles.faq}>
      <Container fluid>
        <Row>
          <Col md="12">
            <div className={styles.sectionTitle}>FAQ.</div>
            <div className={styles.questionText}>Can orders be returned?</div>
            <div className={styles.questionAnswer}>
              Each order is personalized according to the wants of the client.
              Exchange/refund of these orders is not possible as the work cannot
              be undone. However minor changes can be accommodated if the client
              is unsatisfied.
            </div>
            <div className={styles.questionText}>
              How can I clean the shoes?
            </div>
            <div className={styles.questionAnswer}>
              The best way to clean custom shoes is with clear water. Avoid
              scratches and rubbing on painted parts. You may use a repellent
              spray to protect the shoes.
            </div>
            <div className={styles.questionText}>
              How long until I get my customs?
            </div>
            <div className={styles.questionAnswer}>
              Artists have their own processing times which can be quoted only
              after understanding the design the client wants.
            </div>
            <div className={styles.questionText}>
              What is your shipping policy?{" "}
            </div>
            <div className={styles.questionAnswer}>
              As a general guideline, shipping and handling typically will take
              up to 7 - 25 days for domestic shipping.
            </div>
            <div className={styles.questionText}>
              What are the payment methods you offer?
            </div>
            <div className={styles.questionAnswer}>
              We offer payment through online methods only - Bank Transfer,
              Google Pay & Paytm.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
