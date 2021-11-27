import { useHistory } from "react-router";
import Header from "../../../components/Header";
const StoreHeader = () => {
    const history = useHistory();
    return (
        <Header
            props={{
                title: "LeoStore",
                color: "success",
                type: "Store",
                redirect: history.location.pathname,
            }}
        />
    );
};
export default StoreHeader;
