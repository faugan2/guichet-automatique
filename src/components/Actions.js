import {auth,db} from "../connexion_base";
import {useState,useEffect} from "react";
import "../styles/actions.scss";
import retrait from "./img/retrait.png";
import consulter from "./img/consulter.png";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import mouvement from "./img/mouvement.png";
import profil from "./img/profil.jpg";
import {useDispatch,useSelector} from "react-redux";
import {setTab,selectMe} from "../features/counterSlice";
import {useNavigate} from "react-router-dom";

const Actions=()=>{
    const dispatch=useDispatch ();
    const navigate=useNavigate ();
    const [user,set_user]=useState(null);
    const me=useSelector(selectMe);
    useEffect(()=>{
        set_user(auth?.currentUser);
    },[auth]);
    const go_to_consulter=()=>{
        dispatch(setTab(1));
    }
    const go_to_mouvement=()=>{
        dispatch(setTab(2));
    }

    const go_to_retrait=()=>{
        navigate("/retrait");
    }
    const go_to_profile=()=>{
        navigate("/profil");
    }
    return (
        <div className="actions">
            <div className="top">
                <h1>Bonjour {me?.nom},</h1>
                <p>Que souhaitez-vous faire ?</p>
            </div>

            <div className="body">
                <div className="line">
                    <button onClick={go_to_retrait}>
                        <img src={retrait} />
                        Retrait
                        <div>
                            <ArrowRightAltIcon />
                        </div>
                        </button>
                    <button onClick={go_to_consulter}>
                        <img src={consulter} />
                        consultation
                        <div>
                            <ArrowRightAltIcon />
                        </div>
                        </button>
                </div>

                <div className="line">
                    <button onClick={go_to_mouvement}>
                        <img src={mouvement} />
                        Mes mouvements
                        <div>
                            <ArrowRightAltIcon />
                        </div>
                        </button>
                    <button onClick={go_to_profile}>
                        <img src={profil} />
                        Mon profil
                        <div>
                            <ArrowRightAltIcon />
                        </div>
                        </button>
                </div>
            </div>
            
        </div>
    );
}
export default Actions;