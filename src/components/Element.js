import { Link } from "react-router-dom";
import "../css/components/Button.css";
import "../css/components/LinkButton.css";

const Button = () => {
    return <div className="Home"></div>;
};
const LinkButton = ({ props }) => {
    return (
        <Link className={props.color + " LinkButton"} to={props.to}>
            {props.value}
        </Link>
    );
};
const PageLink = ({ props }) => {
    return <Link to={props.to}>{props.value}</Link>;
};

export default { Button, LinkButton, PageLink };
