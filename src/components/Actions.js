import {auth,db} from "../connexion_base";
import {useState,useEffect} from "react";
import "../styles/actions.scss";

const Actions=()=>{
    const [user,set_user]=useState(null);
    useEffect(()=>{
        set_user(auth?.currentUser);
    },[auth]);
    return (
        <div className="actions">
            <div className="top">
                <h1>Bonjour {user?.displayName},</h1>
                <p>Que souhaitez-vous faire ?</p>
            </div>

            <div className="body">
                
            </div>
            
        </div>
    );
}
export default Actions;