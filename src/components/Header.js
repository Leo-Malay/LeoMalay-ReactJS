import "../css/HeaderFooter.css";
const Header = ({ props }) => {
    return (
        <div className="Header">
            <p className={props.color || "primary"} id="title">
                {props.title || "LeoMalay"}
            </p>
        </div>
    );
};

export default Header;
