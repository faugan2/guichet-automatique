import "../styles/splash.scss";
import {auth, db} from "../connexion_base";
import {useState,useEffect} from "react";
import logo from "../components/img/logo.jpg";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setMe,setLoading,setMouvements} from "../features/counterSlice";
import Footer from "../components/Footer";

const Splash=()=>{
    const navigate=useNavigate ();
    const dispatch=useDispatch ();
    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user==null){
                navigate("/login");
            }else{
                await load_user_info();
                await load_user_mouvements();
                navigate("/home");
            }
        })
    },[auth]);

    const load_user_info=async ()=>{
        dispatch(setLoading(true))
        db.collection("clients")
        .where("email","==",auth?.currentUser.email)
        .onSnapshot((snap)=>{
            const doc=snap.docs[0];
            const key=doc.id;
            const user=doc.data();
            user.key=key;
            dispatch(setMe(user))
            dispatch(setLoading(false))
        })
    }

    const load_user_mouvements=async()=>{
        db.collection("mouvements")
        .where("email","==",auth?.currentUser.email)
        .onSnapshot((snap)=>{
            const d=[];
            snap.docs.map((doc)=>{
                const key=doc.id;
                const data=doc.data();
                data.key=key;
                d.push(data);
            })
            dispatch(setMouvements(d));
        })
    }

    return(
        <div className="splash">
                <div>
                    <img src={logo}  style={{width:"4rem",height:"4rem"}}/>
                    <p>Guichet Automatique</p>
                    <p>Chargement...</p>
                </div>

                <Footer />
                
        </div>
    );
}

export default Splash;