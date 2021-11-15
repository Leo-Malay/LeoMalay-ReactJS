import BlogHeader from "./components/BlogHeader";
import BlogCard from "./components/BlogCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch()
    }, [dispatch]);
    return (
        <div className="BlogDashboard">
            <BlogHeader />
            <div className="UserBlog">
                <BlogCard />
            </div>
        </div>
    );
};

export default Dashboard;
