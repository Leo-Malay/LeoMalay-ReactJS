import { Link } from "react-router-dom";
import "../css/components/LinkButton.css";
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

export { LinkButton, PageLink };
