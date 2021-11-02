import { Switch, Route } from "react-router-dom";
import Index from "../views/products/blog/Index";
import Blog from "../views/products/blog/Blog";
import BlogRead from "../views/products/blog/BlogRead";
import BlogWrite from "../views/products/blog/BlogWrite";
const BlogRoute = () => {
    return (
        <Switch className="BlogRoute">
            <Route exact path="/Blog/Index" component={Index} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/Blog/BlogRead/:id" component={BlogRead} />
            <Route exact path="/Blog/BlogWrite" component={BlogWrite} />
        </Switch>
    );
};

export default BlogRoute;
