import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Login = () => {
    const submitHandler = async (e) => {
        e.preventDefault();
    };
    return (
        <div className="Login">
            <Header props={{ title: "LeoAuth", color: "error" }} />
            <form method="POST" action="#" onSubmit={submitHandler}>
                <input type="text" name="username" placeholder="Username" />
                <br />
                <input type="password" name="password" placeholder="Password" />
                <br />
                <input type="submit" name="submit" value="Login" />
                <br />
            </form>
            <Footer props={{ title: "LeoAuth", color: "error" }} />
        </div>
    );
};

export default Login;
