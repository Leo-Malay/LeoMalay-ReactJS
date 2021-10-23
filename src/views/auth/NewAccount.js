import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/components/Input.css";
const NewAccount = () => {
    const submitHandler = async (e) => {
        e.preventDefault();
    };
    return (
        <div className="NewAccount">
            <Header props={{ title: "LeoAuth", color: "error" }} />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <input type="text" name="fname" placeholder="First Name" />
                <br />
                <input type="text" name="lname" placeholder="Last Name" />
                <br />
                <input type="email" name="email" placeholder="Email" />
                <br />
                <input type="text" name="username" placeholder="Username" />
                <br />
                <input type="password" name="password" placeholder="Password" />
                <br />
                <input type="submit" name="submit" value="Create Account" />
                <br />
            </form>
            <Footer props={{ title: "LeoAuth", color: "error" }} />
        </div>
    );
};

export default NewAccount;
