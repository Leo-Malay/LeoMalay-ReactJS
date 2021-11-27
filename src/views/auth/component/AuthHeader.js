import { useHistory } from "react-router";
import Header from "../../../components/Header";
const SocialHeader = () => {
    const history = useHistory();
    return (
        <Header
            props={{
                title: "LeoAuth",
                color: "error",
                type: "Auth",
                redirect: history.location.pathname,
            }}
        />
    );
};
export default SocialHeader;
