import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/components/Home/responsivePlayer.module.scss";
import ReactPlayer from "react-player";
import preplay from "../../videos/maindrippedoutvideo.mp4";
import { useMediaQuery } from "react-responsive";

const ResponsivePlayer = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  // const isIpad = useMediaQuery({ query: "(width: 768px)" });

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1024px)",
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const vid_url = "https://www.youtube.com/watch?v=LXb3EKWsInQ";
  return (
    <div className={styles.player_wrapper}>
      {isTabletOrMobileDevice ? (
        isMobile ? (
          <ReactPlayer
            className={styles.react_player}
            height="80vh"
            width="50vh"
            url={preplay}
            controls={true}
            muted={true}
            playing={true}
            autoPlay={true}
            // stopOnUnmount={false}
          />
        ) : (
          <ReactPlayer
            className={styles.react_player}
            height="100%"
            width="100%"
            url={preplay}
            controls={true}
            muted={true}
            playing={true}
            autoPlay={true}
            // stopOnUnmount={false}
          />
        )
      ) : (
        <ReactPlayer
          className={styles.react_player}
          height="80vh"
          width="130vh"
          url={preplay}
          controls={true}
          muted={true}
          playing={true}
          autoPlay={true}
          // stopOnUnmount={false}
        />
      )}
    </div>
  );
};

export default ResponsivePlayer;
