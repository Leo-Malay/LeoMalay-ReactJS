import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
const UpdatePassword = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, data } = useSelector((state) => state.auth);
    const [username, setUsername] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [cNewPassword, setCNewPassword] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
        if (newPassword !== cNewPassword)
            return alert("Both Password Must Match!");
    };
    useEffect(() => {
        if (data?.username) setUsername(data?.username);
    }, [data]);
    return (
        <div className="UpdatePassword">
            {!isAuthenticated && <Redirect to="/Auth/Login" />}
            <Header
                props={{ title: "LeoAuth", color: "error", type: "Auth" }}
            />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <p className="fs10 bold">Update Password</p>
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
                    name="oldpassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="Old Password"
                    autoComplete="current-password"
                    required
                />
                <br />
                <input
                    type="password"
                    name="newpassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                    autoComplete="new-password"
                    required
                />
                <br />
                <input
                    type="password"
                    name="cnewpassword"
                    value={cNewPassword}
                    onChange={(e) => setCNewPassword(e.target.value)}
                    placeholder="Confirm Password"
                    autoComplete="new-password"
                    required
                />
                <br />
                <input
                    type="submit"
                    name="submit"
                    className="error-nohover"
                    value="Update Password"
                />
                <br />
            </form>
        </div>
    );
};

export default UpdatePassword;
