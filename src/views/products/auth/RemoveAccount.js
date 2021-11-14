import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { removeAccount } from "./redux/authActions";
import { ToastContainer, toast } from "react-toastify";
const RemoveAccount = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, data, err } = useSelector((state) => state.auth);
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
    }, [data, err, dispatch]);
    return (
        <div className="RemoveAccount">
            {!isAuthenticated && <Redirect to="/Auth/Login/0" />}
            <Header
                props={{ title: "LeoAuth", color: "error", type: "Auth" }}
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
