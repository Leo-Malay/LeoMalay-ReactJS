import { Switch, Route } from "react-router-dom";
import Index from "../views/products/social/Index";
import Home from "../views/products/social/Home";
import Profile from "../views/products/social/Profile";
const SocialRoute = () => {
    return (
        <Switch className="SocialRoute">
            <Route exact path="/Social/Index" component={Index} />
            <Route exact path="/Social" component={Home} />
            <Route exact path="/Social/Profile" component={Profile} />
        </Switch>
    );
};

export default SocialRoute;
