import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export const ProtectedRoute = ({ props }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (!isAuthenticated)
        return (
            <Redirect
                to={"/Auth/Login/" + (encodeURIComponent(props.path) || "0")}
            />
        );
    return null;
};
