import { Switch, Route } from "react-router-dom";
import Home from "../views/products/social/Home";
import Profile from "../views/products/social/Profile";
const SocialRoute = () => {
    return (
        <Switch className="SocialRoute">
            <Route exact path="/Social/Home" component={Home} />
            <Route exact path="/Social/Profile" component={Profile} />
        </Switch>
    );
};

export default SocialRoute;
