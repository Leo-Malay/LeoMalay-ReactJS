import { useState } from "react";
import { useParams } from "react-router";

const Gateway = () => {
    const { clientToken, merchantToken } = useParams();
    const [leoPayId, setLeoPayId] = useState("");
    const [pin, setPin] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <div className="Gateway">
            <form method="POST" action="#" onSubmit={submitHandler}>
                <input type="hidden" value={clientToken} />
                <br />
                <input type="hidden" value={merchantToken} />
                <br />
                <input
                    type="text"
                    value={leoPayId}
                    onChange={(e) => setLeoPayId(e.target.value)}
                    placeholder="Leo-Pay-ID"
                />
                <br />
                <input
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Pin"
                />
                <br />
                <input type="submit" value="Pay" className="primary-nohover" />
            </form>
        </div>
    );
};
export default Gateway;
