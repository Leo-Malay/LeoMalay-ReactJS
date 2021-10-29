import { Switch, Route } from "react-router-dom";
import Cafeteria from "../views/cafeteria/Cafeteria";
const CafeteriaRoute = () => {
    return (
        <Switch className="CafeteriaRoute">
            <Route exact path="/Cafeteria" component={Cafeteria} />
        </Switch>
    );
};

export default CafeteriaRoute;
