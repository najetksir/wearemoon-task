import React, { useState } from "react";
import useHover from "../../helpers/use-hover";
import classes from "./realisation.module.scss";
import rightImg from "./rightImg.png";
import arrowrightLine from "./arrowrightLine.png";
import arrowleftLine from "./arrowleftLine.png"


export default function Realisation() {
  const [hoverRef, isHovered] = useHover();
  const ConstDiv = (
    <div>
    <h1>Panneau Bois</h1>
  <p >
   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Cupiditate sunt nisi odio aliquid pariatur! Modi cupiditate officia minus.
     Placeat delectus numquam quae nobis vero, voluptate inventore aliquid, 
     veritatis, molestiae iure eveniet ipsam. Harum, aliquid eius, dict
     a commodi laboriosam dolor consequuntur nisi beatae eaque cum porro
      quaerat officia sequi, quo ipsumhnkdshfnvdkjhfvk
  </p>
 
</div>
  )
  return (
    <div className={classes.realisation_container}>
      

      <div className={classes.left}>
        <h1>Nos réalisations</h1>
        
          

          <div className={classes.card} ref={hoverRef}>
            <div >
            {isHovered ? 
            <div>
              
                 {ConstDiv}
              
              
              
               <div className={classes.hovered_arrow}>
             <img src={arrowrightLine} alt=""/>
            <img src={arrowleftLine} alt=""/>
             </div>
             
            </div>
            
             : 
            ( <div >
                {ConstDiv}
             <div className={classes.arrow_container}>
             <img src={arrowrightLine} alt=""/>
            <img src={arrowleftLine} alt=""/>
             </div>
             </div>
            )}
          </div>
       
      </div>
      <div className={classes.right}>
        <img src={rightImg} alt="" />
      </div>
            </div>
            
    </div>
  );
}
