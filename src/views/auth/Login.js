import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/components/Input.css";
const Login = () => {
    const submitHandler = async (e) => {
        e.preventDefault();
    };
    return (
        <div className="Login">
            <Header props={{ title: "LeoAuth", color: "error" }} />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <p id="title">Login</p>
                <input type="text" name="username" placeholder="Username" />
                <br />
                <input type="password" name="password" placeholder="Password" />
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="Login"
                    className="success"
                />
                <br />
            </form>
            <Footer props={{ title: "LeoAuth", color: "error" }} />
        </div>
    );
};

export default Login;
