import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../hoc/auxillary";
import { SliderData } from "../SliderData";
import classes from "./Modal.module.css";
import useEscKey from "../escKey";
import { Zoom, Fade, Bounce } from "react-reveal";

const Modal = (props) => {
  //   console.log(SliderData[props.index]);
  const imgSrc = props.image;
  console.log(imgSrc);
  useEscKey("Escape", props.hide);
  return (
    <Aux>
      <Backdrop onClick={props.hide} />
      {/* <Bounce> */}
        <div className={classes.Modal}>
          <a href = {imgSrc}>
          <img src={props.image} className={classes.imageShow} />
          {/* <button >IG</button> */}
          </a>
        </div>
      {/* </Bounce> */}
    </Aux>
  );
};

export default Modal;
