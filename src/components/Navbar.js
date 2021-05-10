import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/components/navbar.module.scss";

function NavBar(props) {
  return (
    <div className={styles.navbar}>
      <div className={styles.NavBarInner}>
        <div className={styles.NavbarLinks}>
          <Link to="#home">Home</Link>
          <Link activeClassName={styles.active} to="#collection">
            Collection
          </Link>
          <Link activeClassName={styles.active} to="#contact_us">
            Contact Us
          </Link>
          <Link activeClassName={styles.active} to="#faq">
            FAQ
          </Link>
          <Link activeClassName={styles.active} to="#blog">
            {" "}
            Blog{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
