import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.scss";

export default function DropDown() {
 
  const [open, setOpen] = useState(false);

  const handleEnter= (e) => {
   
    setOpen(true);
  };
  const handleLeave = (e) => {
  
    
    setOpen(false);
  };

  return (
    <div className={classes.dropdown} >
      {open ? (
        <div class={classes.dropdown_content} onMouseLeave={handleLeave}>
          <Link to={'produits'}>Lame en composite</Link>
          <Link>Lame en Bois</Link>
          <Link> Panneau Bois</Link>
          <Link> Grille Rigide</Link>
          <Link> Gabion</Link>

          <Link> Boutique</Link>
        </div>
      ) : (
        <div onMouseEnter={handleEnter} >
          <p >Boutique</p>
        </div>
      )}
    </div>
  );
}
