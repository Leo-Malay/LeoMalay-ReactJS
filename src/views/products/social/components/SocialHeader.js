import { useHistory } from "react-router";
import Header from "../../../../components/Header";
const SocialHeader = () => {
    const history = useHistory();
    return (
        <Header
            props={{
                title: "LeoSocial",
                color: "primary",
                type: "Social",
                redirect: history.location.pathname,
            }}
        />
    );
};
export default SocialHeader;
