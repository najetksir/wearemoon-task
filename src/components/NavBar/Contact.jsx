import React, { useState } from "react";
import classes from "./navbar.module.scss";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.contact}>
      {open ? (
        <div
          className={classes.contact_card}
         onMouseLeave={() => {
            setOpen(false);
          }}
        >
          <div className={classes.img}>
            <p>Coordonnées & Map</p>
          </div>
          <div className={classes.wrapper}>
            <p >
              Hey! pour toute informations ou suggestions, merci de remplir le
              formulaire suivant!
            </p>
            <div>
              <form>
                <input type="text" name="name" placeholder="Nom & Prénom" />

                <input type="text" name="email" placeholder="E-mail" />

                <label >Message</label>
                <textarea name="message" ></textarea>
                <br />
                <input type="submit" value="ENVOYER" />
              </form>
            </div>
          </div>
        </div>
      ) : (
        <p
          onMouseEnter={() => {
            setOpen(true);
          }}
        >
          Contactez-nous
        </p>
      )}
    </div>
  );
}
