const UpdatePassword = () => {
    const submitHandler = async (e) => {
        e.preventDefault();
    };
    return (
        <div className="UpdatePassword">
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
        </div>
    );
};

export default UpdatePassword;
