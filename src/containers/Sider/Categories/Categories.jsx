import classes from "./categories.module.scss";
import React from "react";
import {Link} from "react-router-dom"

export default function Categories(){
    return(
        <div className={classes.categories_container}>
             <h1>CATÉGORIES</h1>
        <div className={classes.link_container}>
            <Link to="/">
                Lame Bois
            </Link>
            <Link to="/"> Lame Composite</Link>
               
           <Link to="/"> Panneau Bois</Link>
               
           <Link to="/">  Grille Rigide</Link>
           <Link to="/">
                Gabillon
          </Link>
              
        </div>   
     </div>
     
    )
}