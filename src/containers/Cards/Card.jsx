import React from "react";
import PropTypes from "prop-types";
import classes from "./card.module.scss";

export default function Card(props) {
  console.log("props=", props);
  const { src, title,price } = props;

  return (
    <div className={classes.card_container}>
      <img src={src} alt="" />
      <div className={classes.overflow}>
        <p>{title}</p> 
        <p >{price}</p>
      </div>
    </div>
  );
}
Card.propTypes = {
  content: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
