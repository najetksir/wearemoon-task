import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../NavBar/NavBar"
import Configurateur from "../Configurateur /Configurateur"
import Footer from "../../components/Footer/Footer"
import ImgSection from "../ImgSection/ImgSection";
import Magasin from "../Magasin/Magasin"
import Realisation from "../Realisation/Realisation"
import Notice from "../Notice/Notice"
import classes from  "./layout.module.scss"





export default function Layout() {

  
    return(
        <div className={classes.app}> 
           
            <div >
            <Header />
            <div className={classes.navbar}>
            <NavBar />
            </div>
            
            
           
      </div>
            
         
            
            <div className={classes.content}>
                <ImgSection />
                <Configurateur />
                <Realisation />
                <Notice />
                <Magasin />
               
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
}