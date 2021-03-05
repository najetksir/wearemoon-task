import React from "react";
import classes from "./footer.module.scss";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={classes.footer_container}>
     <div></div>
        <div className={classes.footer_link}>
          <p>logo</p>
        </div>
        <div className={classes.footer_link}>
          <h2>Liens utiles</h2>
          <Link to="/">Configurateur</Link>
          <br/>
          <Link to="/">Notre magasin</Link>
          <br/>
          <Link to="/">Notice & installation</Link>
          <br/>
          <Link to="/">Livraison transport</Link>
        </div>
        <div className={classes.footer_link}>
          <h2>Nous Contacter</h2>
          <h6>Adress</h6>
          <p>3 Rue champ de verger,Allones, pays de la loire,France</p>
          <h6>Téléphone</h6>
          <p>+332 43 57 00 87</p>
        </div>
     

      <div className={classes.footer_link}>
        <h2>Horaires</h2>
       <h6> Lundi à vendredi </h6>
        <p>7:30-12</p>
        <p>13:30-18</p>
        <h6>Samedi</h6>
        <p>(fermés les samedi de fevrier et janvier)</p>
        <p>9-12:00</p>
        
     </div>
    </div>
  );
}

export default Footer;
