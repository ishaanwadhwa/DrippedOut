import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "../Collections/corousel.css";
import styles from "./carousel.module.css";
import { useSpring, animated } from "react-spring";
import { SliderData } from "./SliderData";
import Modal from "../Collections/Modal/Modal";
import Aux from "../Collections/hoc/auxillary";
import { useState } from "react";

// const calc = (x, y) => [
//   -(y - window.innerHeight / 2) / 20,
//   (x - window.innerWidth / 2) / 20,
//   1.1,
// ];
// const trans = (x, y, s) =>
//   `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ImageCarousel = () => {
  const [photoClicked, setPhotoClicked] = useState(false);
  const [photoSrc, setPhotoIndex] = useState("");

  const imageHideHandler = () => {
    console.log("hiding");
    setPhotoClicked(false);
  };

  const photoClickedHandler = (image) => {
    console.log(image);
    setPhotoClicked(true);
    setPhotoIndex(image);
  };

  const [propsNew, spring] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  console.log(SliderData);
  return (
    <Aux>
      {photoClicked && (
        <Modal image={photoSrc} show={photoClicked} hide={imageHideHandler} />
      )}
      <Carousel
        ssr
        // partialVisbile
        // deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
        ///////////////////////////
        swipeable={true}
        // draggable={false}
        // // showDots={true}

        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        // ssr={true} // means to render carousel on server-side.
        // // itemClass="carousel-item-padding-40-px"
      >
        {SliderData.map((image, index) => {
          return (
            <div key={index}>
              <img
                onClick={() => photoClickedHandler(image.image)}
                style={{ width: "80%", height: 'auto', margin: "auto" }}
                src={image.image}
                class="img-fluid mx-auto d-block"
                alt="img2"
              />
            </div>
          );
        })}
        {/* <div>
        

        <img
          style={{ width: "95%", height: 300, margin: "auto" }}
          src="https://images.unsplash.com/photo-1519747180378-d55bc9a23efd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          class="img-fluid mx-auto d-block"
          alt="img2"
        />
      </div>
      <div>
        <img
          style={{ width: "95%", height: 300, margin: "auto" }}
          src="https://images.unsplash.com/photo-1519747180378-d55bc9a23efd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          class="img-fluid mx-auto d-block"
          alt="img2"
        />
      </div>
      <div>
        <img
          style={{ width: "95%", height: 300, margin: "auto" }}
          src="https://images.unsplash.com/photo-1500817904307-e664893dcbab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          class="img-fluid mx-auto d-block"
          alt="img1"
        />
      </div>
      <div>
        <img
          style={{ width: "95%", height: 300, margin: "auto" }}
          src="https://images.unsplash.com/photo-1519747180378-d55bc9a23efd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          class="img-fluid mx-auto d-block"
          alt="img2"
        />
      </div> */}
      </Carousel>
    </Aux>
  );
};

export default ImageCarousel;
