import Header from "../../../components/Header";
const Message = () => {
    return (
        <div className="Message">
            <Header
                props={{
                    title: "LeoSocial",
                    color: "primary",
                    type: "Social",
                }}
            />
        </div>
    );
};
export default Message;
