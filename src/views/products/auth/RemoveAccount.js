import Header from "../../../components/Header";
import { useState } from "react";
const RemoveAccount = () => {
    const [username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
        if (Password !== cPassword) return alert("Both Password Must Match!");
    };
    return (
        <div className="UpdatePassword">
            <Header
                props={{ title: "LeoAuth", color: "error", type: "Auth" }}
            />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <p className="fs10 bold">Remove Account</p>
                <br />
                <input
                    type="hidden"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    autoComplete="username"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                />
                <br />
                <input
                    type="password"
                    name="cpassword"
                    value={cPassword}
                    onChange={(e) => setCPassword(e.target.value)}
                    placeholder="Confirm Password"
                    autoComplete="current-password"
                    required
                />

                <br />
                <input
                    type="submit"
                    name="submit"
                    className="error-nohover"
                    value="Remove Account"
                />
                <br />
            </form>
        </div>
    );
};

export default RemoveAccount;
