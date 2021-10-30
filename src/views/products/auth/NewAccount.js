import Header from "../../../components/Header";

import "../../../css/components/Input.css";
import { useState } from "react";
const NewAccount = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== cpassword) return alert("Both Password Must Match!");
    };
    return (
        <div className="NewAccount">
            <Header
                props={{ title: "LeoAuth", color: "error", type: "Auth" }}
            />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <p id="title">New Account</p>
                <input
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="First Name"
                    required
                />
                <br />
                <input
                    type="text"
                    name="lname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    placeholder="Last Name"
                    required
                />
                <br />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
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
                    autoComplete="new-password"
                    required
                />
                <input
                    type="password"
                    name="cpassword"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                    placeholder="Confirm Password"
                    autoComplete="new-password"
                    required
                />
                <br />
                <input
                    type="submit"
                    name="submit"
                    className="primary"
                    value="Create Account"
                />
                <br />
            </form>
        </div>
    );
};

export default NewAccount;
