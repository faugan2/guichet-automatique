import "../styles/left.scss";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import HttpsIcon from '@material-ui/icons/Https';
import {auth, db} from "../../../connexion_base"
import {useState,useEffect} from "react";
import { useSelector,useDispatch} from "react-redux";
import {selectPage, setPage} from "../../../features/counterSlice";
import {useNavigate} from "react-router-dom";
const Left=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate ();
    const logout=async ()=>{
        await auth.signOut();
        navigate("/admin-login");
    }

    const [page,set_page]=useState(1);
    const open_page=(e)=>{
        const btn=e.target;
        const page=btn.dataset.page;

        const btns=document.querySelectorAll(".btn");
        for(let i=0; i<btns.length; i++){
            btns[i].classList.remove("active");
        }
        btn.classList.add("active");
        set_page(page);
        dispatch(setPage(page));
    }

    return (
        <div className="left">
            <button className="active btn" onClick={open_page} data-page={1}>
                <PeopleAltIcon style={{color:"gray",fontSize:"1.2rem"}}/>
                Clients</button>
            <button className="btn" onClick={open_page}  data-page={2}>
                <SyncAltIcon style={{color:"gray",fontSize:"1.2rem"}}/>
                Mouvements</button>
            <button onClick={logout}>
                <HttpsIcon style={{color:"gray",fontSize:"1.2rem"}}/>
                Déconnexion</button>
        </div>
    )
}

export default Left;