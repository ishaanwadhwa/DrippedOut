import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/components/Contact/socialButtons.module.scss";

const SocialMediaIcons = () => {
  return (
    <div class={styles.social_menu}>
      <ul>
        <li>
          <a href="" title="FACEBOOK">
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="" title="TWITTER">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="" title="INSTAGRAM">
            <i class="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="" title="YOUTUBE">
            <i class="fa fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="" title="LINKEDIN">
            <i class="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
