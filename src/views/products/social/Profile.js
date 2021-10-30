import Header from "../../../components/Header";
const Profile = () => {
    return (
        <div className="Profile">
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
export default Profile;
