
import React from "react";
import classes from "./configurateur.module.scss";
import confiIcon from "./confiIcon.png"
import arrowleft from "./arrowleft.png"

export default function Configurateur(){

    return(
        <div className={classes.config_container}>
            <img src={confiIcon} alt=""/>
            <div className={classes.config_body}>
            <h1>Configurer votre espace</h1>
            <br/>
            <p>
             Lorem ipsum dolor sit amet.
            </p>
            </div>
            <img src={arrowleft} alt=""/>
            
        </div>
    )
}