import './Login.css';
import {Button} from '@material-ui/core';
import {useDispatch} from "react-redux";
import {auth, provider} from "./firebase";
import {login} from "./features/appSlice";

function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch(login({
                username: result.user.displayName,
                profilePic:result.user.photoURL,
                id:result.user.uid,
            }))
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div class="login__container">
                <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" />
                <Button variant="outlined" onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login
