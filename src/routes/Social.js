import { Switch, Route } from "react-router-dom";
import Index from "../views/products/social/Index";
import Home from "../views/products/social/Home";
import Profile from "../views/products/social/Profile";
import Message from "../views/products/social/Message";
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
