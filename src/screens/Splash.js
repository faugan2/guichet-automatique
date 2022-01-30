import "../styles/splash.scss";
import {auth, db} from "../connexion_base";
import {useState,useEffect} from "react";
import logo from "../components/img/logo.jpg";

const Splash=()=>{

    return(
        <div className="splash">
                <div>
                    <img src={logo}  style={{width:"4rem",height:"4rem"}}/>
                    <p>Guichet Automatique</p>
                    <p>Chargement...</p>
                </div>

                <div className="footer">
                    <label>Créé par</label>
                    <label>ENA TOGO</label>
                </div>
        </div>
    );
}

export default Splash;