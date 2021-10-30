import Header from "../../../components/Header";
const Home = () => {
    return (
        <div className="Home">
            <Header
                props={{
                    title: "LeoSocial",
                    color: "primary",
                    type: "Social",
                }}
            />
        </div>
    );
};
export default Home;
