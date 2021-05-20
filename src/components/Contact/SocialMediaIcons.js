import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/components/Contact/socialButtons.module.scss";

const SocialMediaIcons = () => {
  return (
    <div class={styles.social_menu}>
      <ul>
        <li>
          <a href="https://www.facebook.com/Dripped-Out-109253134644436" title="FACEBOOK" style={{ border : "0.5px solid #4267B2" }}>
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        
        <li>
          <a href="https://www.instagram.com/drippedout.in/?igshid=17vx2kt4ciaxv" target="_blank" title="INSTAGRAM" style={{border : '0.5px solid #8a3ab9	'}}>
            <i class="fa fa-instagram"></i>
          </a>
        </li>
       
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
