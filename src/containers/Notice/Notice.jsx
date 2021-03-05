import React from "react";
import classes from "./notice.module.scss";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";

import image5 from "./image5.png";
export default function Notice() {
 
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className={classes.notice_container}>
     <div className={classes.first_grid}>
            <h1 style={{color:"#7DAF3F"}} >Notice & installation</h1>
            <p>avant de commencer,calculer la quantité de bois de méton</p>
            </div>
      {images.map((image) => {
        return (
          <div className={classes.img_wrapper}>
            
           
            <img src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
}
