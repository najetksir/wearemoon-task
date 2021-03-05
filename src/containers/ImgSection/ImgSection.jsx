import React from "react";
import ImageRender from "./ImageRender";
import classes from "./imgsection.module.scss";
import grille from "./grille.png";
import lammebois from "./lammebois.png";
import panneau from "./panneau.png";
import gabillon from "./gabillon.png";
import composite from "./composite.png";

export default function ImgSection() {
  const imgList = [
    {
      title: "Lamme Commposite",
      url: composite,
    },
    {
      title: "Lamme en Bois",
      url: lammebois,
    },
    {
      title: "Panneau Bois",
      url: panneau,
    },
    {
      title: "Grille rigide",
      url: grille,
    },
    { title: "Gabion", url: gabillon },
  ];

  return (
    <div className={classes.img_container}>
      {imgList.map((img, i) => {
        return (
          <div className={classes.wrapper}>
            <ImageRender img={img.url} key={i} />
            <div className={classes.title}>{img.title}</div>
          </div>
        );
      })}
    </div>
  );
}
