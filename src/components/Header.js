import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/HeaderFooter.css";
import { logout } from "../views/auth/redux/authActions";
import {
    BiMenu,
    BiHomeAlt,
    BiBook,
    BiLogIn,
    BiPackage,
    BiBookAdd,
} from "react-icons/bi";
import { BsBag, BsPersonPlusFill, BsCart2 } from "react-icons/bs";
import { MdWorkOutline, MdPeopleOutline } from "react-icons/md";
const Header = ({ props }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [show, setShow] = useState("none");
    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout());
    };
    const viewHandler = () => {
        if (show === "none") setShow("inline-block");
        else setShow("none");
    };
    return (
        <div className="Header">
            <Link
                to={() => {
                    if (props.type === "Auth") return "/Auth/Account";
                    if (props.type === "Store") return "/Store";
                    if (props.type === "Blog") return "/Blog";
                    if (props.type === "Social") return "/Social";
                    return "";
                }}
            >
                <p className={props.color || "primary"} id="title">
                    {props.title || "LeoMalay"}
                </p>
            </Link>
            <div className="LeftMenu">
                <button className="dropbtn" onClick={viewHandler}>
                    <BiMenu id="icon" />
                </button>
                <div className="dropdown-content" style={{ display: show }}>
                    <div className="Inline">
                        <div>
                            <Link to="/">
                                <BiHomeAlt id="icon" />
                                Home
                            </Link>
                            <Link to="/Blog">
                                <BiBook id="icon" />
                                Blog
                            </Link>
                            <Link to="/Career">
                                <MdWorkOutline id="icon" />
                                Career
                            </Link>
                            <Link to="/Store">
                                <BsBag id="icon" />
                                Store
                            </Link>
                            <Link to="/Social">
                                <MdPeopleOutline id="icon" />
                                Social
                            </Link>
                        </div>
                        <div>
                            {props.type === "Store" && (
                                <Link to="/Store/Cart">
                                    <BsCart2 id="icon" />
                                    Cart
                                </Link>
                            )}
                            {props.type === "Store" && (
                                <Link to="/Store/Order">
                                    <BiPackage id="icon" />
                                    Order
                                </Link>
                            )}
                            {props.type === "Blog" && (
                                <Link to="/Blog/Write">
                                    <BiBookAdd id="icon" />
                                    Write
                                </Link>
                            )}
                            {!isAuthenticated && (
                                <div>
                                    <Link
                                        to={
                                            "/Auth/Login/" +
                                            (encodeURIComponent(
                                                props.redirect
                                            ) || "0")
                                        }
                                    >
                                        <BiLogIn id="icon" />
                                        Login
                                    </Link>
                                    <Link
                                        to={
                                            "/Auth/NewAccount/" +
                                            (encodeURIComponent(
                                                props.redirect
                                            ) || "0")
                                        }
                                    >
                                        <BsPersonPlusFill id="icon" />
                                        Register
                                    </Link>
                                </div>
                            )}
                            {isAuthenticated && (
                                <div>
                                    <Link to="/Auth/Account">Account</Link>
                                    <Link to="/" onClick={logoutHandler}>
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
