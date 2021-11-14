import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { updatePassword } from "./redux/authActions";
import { ToastContainer, toast } from "react-toastify";
const UpdatePassword = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, data, err, suc } = useSelector(
        (state) => state.auth
    );
    const [username, setUsername] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [cNewPassword, setCNewPassword] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
        if (newPassword !== cNewPassword)
            return alert("Both Password Must Match!");
        dispatch(updatePassword(oldPassword, newPassword));
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
        if (suc !== undefined) {
            toast.success(suc, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        dispatch({ type: "CLEAR_ERR" });
    }, [data, err, suc, dispatch]);
    return (
        <div className="UpdatePassword">
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
