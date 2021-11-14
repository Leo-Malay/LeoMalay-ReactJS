import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import "./css/Input.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/authActions";
import { useHistory, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
    const { redirect } = useParams();
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isAuthenticated, err } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(login(username, password));
    };
    console.log(redirect, decodeURIComponent(redirect));
    useEffect(() => {
        if (err !== undefined)
            toast.error(err, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        dispatch({ type: "CLEAR_ERR" });
        if (isAuthenticated) {
            if (redirect !== "0")
                return history.push(decodeURIComponent(redirect));
            else return history.push("/Auth/Account");
        }
    }, [err, dispatch, isAuthenticated, redirect, history]);
    return (
        <div className="Login">
            <Header
                props={{
                    title: "LeoAuth",
                    color: "error",
                    type: "Auth",
                    redirect,
                }}
            />
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <p className="fs10 bold">Login</p>
                <br />
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    autoComplete="username"
                    required
                />
                <br />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                />
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="Login"
                    className="success-nohover"
                />
                <br />
            </form>
        </div>
    );
};

export default Login;
