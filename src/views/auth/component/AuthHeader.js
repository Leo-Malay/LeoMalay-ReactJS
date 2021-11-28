import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import Header from "../../../components/Header";
const SocialHeader = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { err, suc } = useSelector((state) => state.auth);
    useEffect(() => {
        if (err !== undefined)
            toast.error(err, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        if (suc !== undefined)
            toast.success(suc, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        dispatch({ type: "STORE_ERRSUC_CLEAR" });
    }, [dispatch, err, suc]);
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
