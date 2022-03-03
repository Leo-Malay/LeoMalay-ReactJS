import React from "react";
import { Link } from "react-router-dom";
import CareerHeader from "./components/CareerHeader";
import "./css/index.css";
const Index = () => {
    return (
        <div className="CareerIndex">
            <CareerHeader />
            <div className="sec1">
                <p className="AlignCenter title bold">LeoCareer</p>
                <p className="AlignCenter fs10 bold">
                    Helping you find the Dream Job
                </p>
                <br />
                <center>
                    <Link
                        className="AlignCenter primary-nohover btn"
                        to="/Career"
                    >
                        Visit Career Now
                    </Link>
                </center>
            </div>
            <div className="sec2">
                <p className="AlignLeft title bold">Internships</p>
                <br />
                <p className="AlignLeft fs7 bold">
                    Many companies around the world have come together
                    <br /> in a single place. Thus using our advance you can
                    find and
                    <br />
                    apply to the Internship at a single click
                </p>
                <br />
                <p className="AlignRight title bold">Jobs</p>
                <br />
                <p className="AlignRight fs7 bold">
                    Millions of People worldwide are looking for a change in
                    <br />
                    their daily job. You are at the right place. Browser through
                    <br />
                    the differet jobs available and apply with just a single
                    click
                </p>
                <br />
            </div>
            <div className="sec3">
                <p className="AlignLeft fs17 bold">Dear Companies,</p>
                <br />
                <p className="AlignJustify fs5">
                    Hello, We all know that finding the perfect candidte for the
                    exact position is a tedious task to achive thus we have
                    created this platform which allows the candidate to find
                    you. Which ultimately makes the whole process a lot easier
                    to achieve the desire task.
                    <br />
                    <br />
                    Yours Faithfully,
                </p>
                <p className="AlignJustify fs7 bold">LeoMalay</p>
            </div>
        </div>
    );
};
export default Index;
