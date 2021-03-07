import React from"react";
import PropTypes from 'prop-types';
import classes from "./imgsection.module.scss";

const ImageRender = (props) =>{
   // console.log(props.img)
    return(
        <div className={classes.img_wrapper}>
            
            <img src={props.img}  alt=""  />
            
        </div>
    )
    }

    export default ImageRender;
    ImageRender.propTypes ={
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        
     } 