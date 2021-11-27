import AuthHeader from "./component/AuthHeader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { updatePassword } from "./redux/authActions";
import { toast } from "react-toastify";
const ForgotPassword = () => {
    const dispatch = useDispatch();
    const { data, err, suc } = useSelector((state) => state.auth);
    const [code, setCode] = useState("");
    const [showCode, setShowCode] = useState(true);
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
        if (showCode) setShowCode(!showCode);
        //dispatch(ForgotPasswordCode(code));
    };
    useEffect(() => {
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
        <div className="ForgotPassword">
            <AuthHeader />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <p id="Header">
                    {showCode ? "Confirm Code" : "Update Password"}
                </p>
                {showCode && (
                    <p id="Desc">
                        <br />
                        We have sent you an email containing the code on your
                        registered Email Address.
                        <br />
                        Enter the code here to confirm your identity and
                        continue.
                    </p>
                )}
                <br />
                {showCode && (
                    <input
                        type="number"
                        name="code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Code"
                        autoComplete="off"
                        required
                    />
                )}
                {!showCode && (
                    <div>
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
                            value={cPassword}
                            onChange={(e) => setCPassword(e.target.value)}
                            placeholder="Confirm Password"
                            autoComplete="new-password"
                            required
                        />
                    </div>
                )}
                <input
                    type="submit"
                    name="submit"
                    className="error-nohover"
                    value={!showCode ? "Update Password" : "Submit"}
                />
                <br />
            </form>
        </div>
    );
};

export default ForgotPassword;
