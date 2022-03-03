import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "../Index";
import Blog from "../Blog";
import Dashboard from "../Dashboard";
import BlogRead from "../BlogRead";
import BlogWrite from "../BlogWrite";
const BlogRoute = () => {
    return (
        <div className="BlogRoute">
            <Switch>
                <Route exact path="/Blog/Index" component={Index} />
                <Route exact path="/Blog" component={Blog} />
                <Route exact path="/Blog/Dashboard" component={Dashboard} />
                <Route exact path="/Blog/Read/:id" component={BlogRead} />
                <Route exact path="/Blog/Write" component={BlogWrite} />
            </Switch>
        </div>
    );
};

export default BlogRoute;
