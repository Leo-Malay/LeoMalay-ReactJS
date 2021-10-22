const Login = () => {
    const submitHandler = async (e) => {
        e.preventDefault();
    };
    return (
        <div className="Login">
            <form method="POST" action="#" onSubmit={submitHandler}>
                <input type="text" name="username" placeholder="Username" />
                <br />
                <input type="password" name="password" placeholder="Password" />
                <br />
                <input type="submit" name="submit" value="Login" />
                <br />
            </form>
        </div>
    );
};

export default Login;
