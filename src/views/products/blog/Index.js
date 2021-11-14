import { Link } from "react-router-dom";
import BlogHeader from "./components/BlogHeader";
import "./css/index.css";
const Index = () => {
    return (
        <div className="BlogIndex">
            <BlogHeader />
            <div className="sec1">
                <p className="AlignCenter title bold">LeoBlog</p>
                <p className="AlignCenter fs15 bold">
                    Place to Read, Write {"&"} Share
                </p>
                <br />
                <center>
                    <Link className="AlignCenter secondary-nohover" to="/Blog">
                        Visit Blog Now
                    </Link>
                </center>
            </div>
            <div className="sec2">
                <p className="AlignLeft title bold">Write</p>
                <br />
                <p className="AlignLeft fs7 bold">
                    Anyone who is passionate for writting can
                    <br /> contibute to the LeoBlogs.
                </p>
                <br />
                <p className="AlignRight title bold">Read</p>
                <br />
                <p className="AlignRight fs7 bold">
                    Millions of People worldwide, are reading blogs on this
                    website.
                    <br /> Enlighten them with your knowledge by sharing your
                    blogs with them.
                </p>
                <br />
            </div>
            <div className="sec3">
                <p className="AlignLeft fs17 bold">Dear Reader,</p>
                <br />
                <p className="AlignJustify fs5">
                    We have developed this platform for the people all over the
                    world to come togeather and share what they have. As the
                    saying goes "Pen is more powerful than Sword", I belive that
                    using our digital pen and paper, you all will be able to
                    enlighten millions of young mind, eager to learn. Thus
                    keeping supporting by writing your blogs and helps use by
                    reporting the blogs that are inapproiate and having false
                    informations. Hope you all have a great day.
                    <br />
                    <br />
                    Yours Faithfully,
                </p>
                <p className="AlignJustify fs7 bold">LeoMalay</p>
            </div>
        </div>
    );
};
export default Index;
