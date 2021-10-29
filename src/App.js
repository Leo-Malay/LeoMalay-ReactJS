import { BrowserRouter, Route } from "react-router-dom";
import "./css/App.css";
import "./css/Color.css";
import Home from "./views/Home";
import AuthRoute from "./routes/Auth";
import BlogRoute from "./routes/Blog";
import CafeteriaRoute from "./routes/Cafeteria";
import StoreRoute from "./routes/Store";
import InventoryRoute from "./routes/Inventory";
const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            {/** Product Based */}
            <AuthRoute />
            <BlogRoute />
            <CafeteriaRoute />
            <StoreRoute />
            {/** Service Based */}
            <InventoryRoute />
        </BrowserRouter>
    );
};
export default App;
