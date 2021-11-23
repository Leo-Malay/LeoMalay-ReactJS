import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import "./css/Input.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/authActions";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import Input from "../../../components/Input";
const Login = () => {
    const { redirect } = useParams();
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isAuthenticated, err, isLoading } = useSelector(
        (state) => state.auth
    );
    const dispatch = useDispatch();
    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(login(username, password));
    };
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

            <form method="POST" action="#" onSubmit={submitHandler}>
                <p className="fs10 bold">Login</p>
                <br />
                <Input props={{ type: "text", label: "Text here" }} />
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
                    value={isLoading ? "..." : "Login"}
                    className="success-nohover"
                />
                <br />
            </form>
        </div>
    );
};

export default Login;
