import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/components/Customer_service/customer_service.module.scss";
import { Zoom, Fade } from "react-reveal";

const customerService = (props) => {
  return (
    <div className={styles.customerService}>
      <Container fluid>
        <Row>
          <Col md="12">
            <div className={styles.sectionTitle}>How do we work?</div>
            <div className={styles.sectionSubTitle}>
              Interested in up-cycling your pre-owned shoes?
            </div>
            <div className={styles.sectionText}>
              Contact us on email/Instagram to send us your sneakers or apparel
              for the Dripped Out team to work their magic on.
            </div>
            <div className={styles.sectionText}>
              Reach out to us on E-mail/Instagram/Whatsapp with a query. We will
              assist you with the best possible customization options for your
              products. After deep inspection of the product we arrange a
              pick-up from your doorstep, the product is then received by our
              artist - where your products get a new life. Depending on the
              complexity of the design we quote a customization timeline which
              can take upto 7-25 days.
            </div>
            <br />
            <div className={styles.sectionText}>
              <pre style={{ color: "white" }}>
                Email ID-
                <br />
                <a
                  className={styles.inlineLinks}
                  href="mailto: simran@drippedout.in"
                >
                  {" "}
                  simran@drippedout.in
                </a>
                <br />
                <a
                  className={styles.inlineLinks}
                  href="mailto: simran@drippedout.in"
                >
                  {" "}
                  param@drippedout.in
                </a>
                <br />
                Phone no. - 9082536576
                <br />
                Instagram -{" "}
                <a
                  className={styles.inlineLinks}
                  href="https://instagram.com/drippedout.in?igshid=17vx2kt4ciaxv"
                >
                  {" "}
                  @drippedout.in{" "}
                </a>
              </pre>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default customerService;
