import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "../Index";
import Home from "../Home";
import Profile from "../Profile";
import Message from "../Message";
const SocialRoute = () => {
    return (
        <Switch className="SocialRoute">
            <Route exact path="/Social/Index" component={Index} />
            <Route exact path="/Social" component={Home} />
            <Route exact path="/Social/Profile/:id" component={Profile} />
            <Route exact path="/Social/Message" component={Message} />
        </Switch>
    );
};

export default SocialRoute;
