import React from "react";
import classes from "./navbar.module.scss";
import DropDown from "./DropDown";
import Contact from "./Contact";

export default function NavBar() {
  return (
    <div className={classes.navbar_container}>
      <div className={classes.nav1}>
        <p>Accueil</p>
      </div>

      <DropDown />

      <div className={classes.realisation}>
        <p>Nos réalisations</p>
      </div>
     
        <Contact />
    
    </div>
  );
}
