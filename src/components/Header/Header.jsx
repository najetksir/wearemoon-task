import React from "react";
import classes from "./header.module.scss";
import icon from "./searchIcon.png"

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.site_logo}>
        <p>Mon</p><p> Extérieur.fr</p>
      </div>
      <div  className={classes.search_box}>
      <input
       
        name="Search"
        type="text"
        placeholder="Recherche"
      />
      <img src={icon} alt=""/>
      </div>
      

      <div className={classes.divider}>
        <div className={classes.magasin}>
          <p>Notre magasin</p>
        </div>
        <div className={classes.config}>
          <p>configurateur</p>
        </div>
      </div>
    </div>
  );
}
