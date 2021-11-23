import { Switch, Route } from "react-router-dom";
import Index from "../Index";
import Gateway from "../Gateway";
const PayRoute = () => {
    return (
        <Switch className="PayRoute">
            <Route exact path="/Pay/Index" component={Index} />
            <Route
                exact
                path="/Pay/Gateway/:merchantId/:transactionId"
                component={Gateway}
            />
        </Switch>
    );
};

export default PayRoute;
