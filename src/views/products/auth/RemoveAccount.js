import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { removeAccount } from "./redux/authActions";
const RemoveAccount = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, data } = useSelector((state) => state.auth);
    const [username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
        if (Password !== cPassword) return alert("Both Password Must Match!");
        dispatch(removeAccount(Password));
    };
    useEffect(() => {
        if (data?.username) setUsername(data?.username);
    }, [data]);
    return (
        <div className="RemoveAccount">
            {!isAuthenticated && <Redirect to="/Auth/Login" />}
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
