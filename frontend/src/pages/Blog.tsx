import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { useBlog } from "../hooks"
import { BlogContent } from "../components/BlogContent";
import { Spinner } from "../components/Spinner";

export const Blog = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: String(id || "")
    });
    if(loading || !blog){
        return(
            <div>
            <Appbar/>
            <div className="h-screen flex flex-col">
                <div className="flex justify-center items-center flex-1">
                    <Spinner/>
                </div>
            </div>
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

