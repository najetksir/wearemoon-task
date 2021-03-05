import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.scss";

export default function DropDown() {
 
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleLeave = () => {
    setOpen(false);
  };

  return (
    <div class={classes.dropdown}>
      {open ? (
        <div class={classes.dropdown_content}>
          <Link to={'produits'}>Lame en composite</Link>
          <Link>Lame en Bois</Link>
          <Link> Panneau Bois</Link>
          <Link> Grille Rigide</Link>
          <Link> Gabion</Link>

          <Link> Boutique</Link>
        </div>
      ) : (
        <div onMouseEnter={handleClick} onMouseLeave={handleLeave}>
          <p>Boutique</p>
        </div>
      )}
    </div>
  );
}
