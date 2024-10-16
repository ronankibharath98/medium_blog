import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { useBlog } from "../hooks"
import { BlogContent } from "../components/BlogContent";

export const Blog = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: String(id || "")
    });
    if(loading){
        return(
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div>
            <Appbar/>
            <div className="flex justify-center">
                <div className="max-w-xl">
                    <BlogContent blog = {blog}/>
                </div>
            </div>
        </div>
    )
}

