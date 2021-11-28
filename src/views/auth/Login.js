import AuthHeader from "./component/AuthHeader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/authActions";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
const Login = () => {
    const { redirect } = useParams();
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(login(username, password));
    };
    useEffect(() => {
        if (isAuthenticated) {
            if (redirect !== "0")
                return history.push(decodeURIComponent(redirect));
            else return history.push("/Auth/Account");
        }
    }, [dispatch, isAuthenticated, redirect, history]);
    return (
        <div className="Login">
            <AuthHeader />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <p id="Header">Login</p>
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
                    value={isLoading ? "..." : "Login"}
                    className="success-nohover"
                />
                <br />
                <Link to={"/Auth/NewAccount/" + redirect}>
                    New Here? Register Now
                </Link>
                <br />
                <Link to="/Auth/ForgotPassword">
                    Forgot Password? Click Here
                </Link>
            </form>
        </div>
    );
};

export default Login;
