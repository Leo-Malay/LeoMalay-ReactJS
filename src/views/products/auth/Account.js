import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import { LinkButton } from "../../../components/Element";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { updateAccount } from "./redux/authActions";
import { toast } from "react-toastify";
const Account = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, data, err, suc } = useSelector(
        (state) => state.auth
    );
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [al1, setAl1] = useState("");
    const [al2, setAl2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const addressUpdateHandler = (e) => {
        e.preventDefault();
        dispatch(updateAccount(al1, al2, city, state, country, pincode));
    };
    useEffect(() => {
        if (data?.fname) setFname(data?.fname);
        if (data?.lname) setLname(data?.lname);
        if (data?.email) setEmail(data?.email);
        if (data?.al1) setAl1(data?.al1);
        if (data?.al2) setAl2(data?.al2);
        if (data?.city) setCity(data?.city);
        if (data?.state) setState(data?.state);
        if (data?.country) setCountry(data?.country);
        if (data?.pincode) setPincode(data?.pincode);
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
        if (suc !== undefined)
            toast.success(suc, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        dispatch({ type: "CLEAR_ERR" });
    }, [data, dispatch, err, suc]);
    return (
        <div className="Account">
            {!isAuthenticated && <Redirect to="/Auth/Login/0" />}
            <Header
                props={{ title: "LeoAuth", color: "error", type: "Auth" }}
            />
            <p
                className="fs15 bold"
                style={{
                    textAlign: "center",
                    marginTop: 40,
                    marginBottom: 40,
                }}
            >
                Welcome{" "}
                {(data?.fname || "Guest") + " " + (data?.lname || "User")}
            </p>

            <form>
                <p className="fs10 bold">General</p>
                <table
                    border={0}
                    style={{
                        margin: "auto",
                        textAlign: "left",
                        paddingTop: 12,
                    }}
                >
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>
                                <input
                                    type="text"
                                    name="fname"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    placeholder="First Name"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>
                                <input
                                    type="text"
                                    name="lname"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    placeholder="Last Name"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    required
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input
                    type="submit"
                    name="submit"
                    className="success-nohover"
                    value="Update"
                />
                <br />
                <br />
                <LinkButton
                    props={{
                        value: "Update Password",
                        color: "error-inv",
                        to: "/Auth/UpdatePassword",
                    }}
                />
                <LinkButton
                    props={{
                        value: "Delete Account",
                        color: "error-inv",
                        to: "/Auth/RemoveAccount",
                    }}
                />
            </form>
            <form method="POST" action="#" onSubmit={addressUpdateHandler}>
                <p className="fs10 bold">Address</p>
                <table
                    border={0}
                    style={{
                        margin: "auto",
                        textAlign: "left",
                        paddingTop: 12,
                    }}
                >
                    <tbody>
                        <tr>
                            <td>Address Line 1</td>
                            <td>
                                <input
                                    type="text"
                                    name="al1"
                                    value={al1}
                                    onChange={(e) => setAl1(e.target.value)}
                                    placeholder="Address Line 1"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Address Line 2</td>
                            <td>
                                <input
                                    type="text"
                                    name="al2"
                                    value={al2}
                                    onChange={(e) => setAl2(e.target.value)}
                                    placeholder="Address Line 2"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <input
                                    type="text"
                                    name="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="City"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>
                                <input
                                    type="text"
                                    name="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    placeholder="State"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>
                                <input
                                    type="text"
                                    name="country"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    placeholder="Country"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Postal code</td>
                            <td>
                                <input
                                    type="text"
                                    name="pincode"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                    placeholder="Postal Code"
                                    required
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input
                    type="submit"
                    name="submit"
                    className="success-nohover"
                    value="Update"
                />
            </form>
        </div>
    );
};

export default Account;
