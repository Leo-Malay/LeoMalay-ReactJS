import Header from "../../components/Header";
import Footer from "../../components/Footer";
const UpdatePassword = () => {
    const submitHandler = async (e) => {
        e.preventDefault();
    };
    return (
        <div className="UpdatePassword">
            <Header props={{ title: "LeoAuth", color: "error" }} />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <input
                    type="password"
                    name="oldpass"
                    placeholder="Old Password"
                />
                <br />
                <input
                    type="password"
                    name="newpass"
                    placeholder="New Password"
                />
                <br />
                <input
                    type="password"
                    name="cnewpass"
                    placeholder="Confirm Password"
                />
                <br />
                <input type="submit" name="submit" value="Update Password" />
                <br />
            </form>
            <Footer props={{ title: "LeoAuth", color: "error" }} />
        </div>
    );
};

export default UpdatePassword;
