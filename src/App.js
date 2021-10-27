import { BrowserRouter, Route } from "react-router-dom";
import "./css/App.css";
import "./css/Color.css";
import Home from "./views/Home";
import Login from "./views/auth/Login";
import Account from "./views/auth/Account";
import NewAccount from "./views/auth/NewAccount";
import UpdatePassword from "./views/auth/UpdatePassword";
import Cart from "./views/store/Cart";
import Product from "./views/store/Product";
import Store from "./views/store/Store";
import Blog from "./views/blog/Blog";
import BlogRead from "./views/blog/BlogRead";
import Cafeteria from "./views/cafeteria/Cafeteria";
const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/Auth/Login" component={Login} />
            <Route exact path="/Auth/Account" component={Account} />
            <Route exact path="/Auth/NewAccount" component={NewAccount} />
            <Route
                exact
                path="/Auth/UpdatePassword"
                component={UpdatePassword}
            />
            <Route exact path="/Store" component={Store} />
            <Route exact path="/Store/Product" component={Product} />
            <Route exact path="/Store/Cart" component={Cart} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/Blog/BlogRead" component={BlogRead} />
            <Route exact path="/Cafeteria" component={Cafeteria} />
        </BrowserRouter>
    );
};

export default App;
