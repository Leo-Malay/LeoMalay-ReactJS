import Header from "../../../components/Header";

import { useState } from "react";
const UpdatePassword = () => {
    const [username, setUsername] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [cNewPassword, setCNewPassword] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
        if (newPassword !== cNewPassword)
            return alert("Both Password Must Match!");
    };
    return (
        <div className="UpdatePassword">
            <Header
                props={{ title: "LeoAuth", color: "error", type: "Auth" }}
            />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <p id="title">Update Password</p>
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
                    className="error"
                    value="Update Password"
                />
                <br />
            </form>
        </div>
    );
};

export default UpdatePassword;
