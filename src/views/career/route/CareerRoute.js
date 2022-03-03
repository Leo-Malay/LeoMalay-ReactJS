import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "../Index";
// Importing Company Side Modules.
import CompanyDash from "../company/Dashboard";
import Internship from "../company/internship/Internship";
import AddInternship from "../company/internship/AddInternship";
import UpdateInternship from "../company/internship/UpdateInternship";
import Job from "../company/job/Job";
import AddJob from "../company/job/AddJob";
import UpdateJob from "../company/job/UpdateJob";
const CareerRoute = () => {
    return (
        <div className="CareerRoute">
            <Switch>
                <Route exact path="/Career/Index" component={Index} />
                {/* Company Routes */}
                <Route
                    exact
                    path="/Career/C/Dashboard"
                    component={CompanyDash}
                />
                <Route
                    exact
                    path="/Career/C/Internship"
                    component={Internship}
                />
                <Route
                    exact
                    path="/Career/C/Internship/Add/:id"
                    component={AddInternship}
                />
                <Route
                    exact
                    path="/Career/C/Internship/Update/:id"
                    component={UpdateInternship}
                />
                <Route exact path="/Career/C/Job" component={Job} />
                <Route exact path="/Career/C/Job/Add/:id" component={AddJob} />
                <Route
                    exact
                    path="/Career/C/Job/Update/:id"
                    component={UpdateJob}
                />
                {/* User Routes */}
            </Switch>
        </div>
    );
};

export default CareerRoute;
