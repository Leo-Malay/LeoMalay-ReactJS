import Header from "../../../components/Header";
import { useState } from "react";
import "./css/Input.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/authActions";
import { Redirect } from "react-router";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(login(username, password));
    };
    return (
        <div className="Login">
            {isAuthenticated && <Redirect to="/Auth/Account" />}
            <Header
                props={{ title: "LeoAuth", color: "error", type: "Auth" }}
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
