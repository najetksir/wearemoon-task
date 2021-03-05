import React from "react";
import classes from "./sider.module.scss";
import Categories from "./Categories/Categories"
export default function Sider(){
return(
    <div className={classes.siderBox}>
       <Categories/>

    </div>
)
}