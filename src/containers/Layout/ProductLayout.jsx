import classes from "./layout.module.scss";
import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar"
import DisplayProducts from "../DisplayProducts/DisplayProducts";
import Footer from "../../components/Footer/Footer";
import Sider from "../Sider/Sider";

export default function ProductLayout() {
  return (
    <div>
      <Header />
      <div className={classes.productNavbar}>
        <NavBar />
      </div>
      <div className={classes.productContent}>
        <Sider />
        <DisplayProducts />
      </div>
      <div></div>
      <Footer />
    </div>
  );
}
