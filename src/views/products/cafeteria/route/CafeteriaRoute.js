import { Switch, Route } from "react-router-dom";
import Index from "../Index";
import Cafeteria from "../Cafeteria";
const CafeteriaRoute = () => {
    return (
        <Switch className="CafeteriaRoute">
            <Route exact path="/Cafeteria/Index" component={Index} />
            <Route exact path="/Cafeteria" component={Cafeteria} />
        </Switch>
    );
};

export default CafeteriaRoute;
