import { Appbar } from "../components/Appbar"
import { BlogsCard } from "../components/BlogsCard"
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks/index"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return (
            <div >
                <Appbar />
                <div className="flex justify-center">
                    <div className="max-w-xl">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="max-w-xl">
                    {blogs.map(blog =>
                        <BlogsCard
                            key={blog.id}
                            id={blog.id}
                            author={blog.author.name}
                            title={blog.title}
                            content={blog.content}
                            publishedDate="Oct 3 2024"
                            tag={blog.tag || "nottagged"} />
                    )}
                </div>
            </div>
        </div>
    )
}