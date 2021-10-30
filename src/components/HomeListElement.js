import { LinkButton } from "./Element";

const HomeListElement = ({ props }) => {
    return (
        <div className="ListElement" id="ListElement">
            <p className={props.color} id="title">
                {props.value}
            </p>
            <br />
            <p id="desc">{props.desc}</p>
            <br />
            <LinkButton
                props={{ value: "Visit Now", to: props.to, color: props.color }}
            />
        </div>
    );
};
export default HomeListElement;
