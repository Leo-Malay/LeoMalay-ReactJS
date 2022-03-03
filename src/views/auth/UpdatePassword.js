import AuthHeader from "./component/AuthHeader";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { updatePassword } from "./redux/authActions";
const UpdatePassword = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, data } = useSelector((state) => state.auth);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [cNewPassword, setCNewPassword] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
        if (newPassword !== cNewPassword)
            return alert("Both Password Must Match!");
        dispatch(updatePassword(oldPassword, newPassword));
    };
    useEffect(() => {}, [data, dispatch]);
    return (
        <div className="UpdatePassword">
            {!isAuthenticated && <Redirect to="/Auth/Login/0" />}
            <AuthHeader />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <p id="Header">Update Password</p>
                <br />
                <input
                    type="password"
                    name="oldpassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="Old Password"
                    autoComplete="current-password"
                    required
                />
                <input
                    type="password"
                    name="newpassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                    autoComplete="new-password"
                    required
                />
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
