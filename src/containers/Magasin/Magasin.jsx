import React, { useState } from "react";
import useHover from "../../helpers/use-hover";
import classes from "./magasin.module.scss";
import leftImg from "./c49410fcd941eb66349f9dd27fceebaf@2x.png";
import rightImg from "./image.png";

export default function Magasin() {
  const [hoverRef, isHovered] = useHover();
  return (
    <div className={classes.magasin_container}>
      <div className={classes.left}>
        <img src={leftImg} alt="" />
      </div>

      <div className={classes.right}>
        <h1>Notre magasin</h1>
        <div className={classes.card} ref={hoverRef}>
          <img src={rightImg} alt="" />

          <div className={classes.card_body}>
            {isHovered ? (
              <div>
                <p style={{ color: " #6F6C6C" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  maiores.
                </p>
                <p >EN SAVOIR PLUS</p>
              </div>
            ) : (
              <div>
                <p style={{ color: "#6F6C6C" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  maiores.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
