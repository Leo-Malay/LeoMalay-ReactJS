import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/components/Input.css";
import { useState } from "react";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
    };
    return (
        <div className="Login">
            <Header
                props={{ title: "LeoAuth", color: "error", type: "Auth" }}
            />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <p id="title">Login</p>
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
                    className="success"
                />
                <br />
            </form>
            <Footer
                props={{ title: "LeoAuth", color: "error", type: "Auth" }}
            />
        </div>
    );
};

export default Login;
