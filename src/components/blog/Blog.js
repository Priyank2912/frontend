import Navbar from "../common/navbar/navbar";
import './blog.scss'
import BlogComponent from "./BlogComponent";
const Blog = (Props)=>{
    return(
        <>
            <div className={"mainBlogContainer"}>
           
                <div className={"container"}>
                <h1 className="blog-title">Immerse Youself</h1>
                    <BlogComponent />
                    <BlogComponent />
                    <BlogComponent />
                    <BlogComponent />
                    <BlogComponent />
                    
                </div>
            </div>
        </>
    );
}
export default Blog;