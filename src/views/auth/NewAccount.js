import AuthHeader from "./component/AuthHeader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newAccount } from "./redux/authActions";
import { Redirect, useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
const NewAccount = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { redirect } = useParams();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const { isAuthenticated } = useSelector((state) => state.auth);
    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== cpassword) return alert("Both Password Must Match!");
        dispatch(newAccount(fname, lname, email, username, password));
    };
    useEffect(() => {
        if (isAuthenticated) {
            if (redirect !== "0")
                return history.push(decodeURIComponent(redirect));
            else return history.push("/Auth/Account");
        }
    }, [history, redirect, isAuthenticated]);
    return (
        <div className="NewAccount">
            {isAuthenticated && <Redirect to="/Auth/Account" />}
            <AuthHeader />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <p id="Header">New Account</p>
                <br />
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
                <br />
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
                    className="primary-nohover"
                    value="Create Account"
                />
                <br />
                <Link to={"/Auth/Login/" + redirect}>
                    Already have Account? Click Here
                </Link>
            </form>
        </div>
    );
};

export default NewAccount;
