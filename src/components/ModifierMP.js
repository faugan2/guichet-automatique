import LockIcon from '@material-ui/icons/Lock';
import "../styles/modifier_mp.scss";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {useState,useEffect} from "react";
import { useSelector,useDispatch} from "react-redux";
import {selectMe} from "../features/counterSlice";
import {auth, db} from "../connexion_base";

const ModifierMp=()=>{
    
    return(
        <div className="modifier_mp">
            <div className="line">
                <label>Ancien mot de passe</label>
                <div>
                    <input type="password" placeholder="votre ancien mot de passe" />
                    <button>
                        <VisibilityIcon style={{color:"gray",fontSize:"1.2rem"}}/>
                    </button>
                    
                </div>
            </div>

            <div className="line">
                <label>Nouveau mot de passe</label>
                <div>
                    <input type="password" placeholder="votre nouveau mot de passe" />
                    <button>
                        <VisibilityIcon style={{color:"gray",fontSize:"1.2rem"}}/>
                    </button>
                </div>
            </div>

            <div className="line">
                <label>Confirmez le  mot de passe</label>
                <div>
                    <input type="password" placeholder="Confirmation" />
                    <button>
                        <VisibilityIcon style={{color:"gray",fontSize:"1.2rem"}}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModifierMp;