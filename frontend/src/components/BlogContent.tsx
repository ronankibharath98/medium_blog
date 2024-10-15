import { Blog } from "../hooks"
import { Avatar } from "./BlogsCard"

export const BlogContent = ({blog}: {blog: Blog}) => {
    return(
        <div>
            <div>
                <Avatar size= "big" name = {blog.author.name ?? "Anonymous"}/>
            </div>
            <div>
                {blog.title}
            </div>
            <div>
                {blog.content}
            </div>
        </div>
    )
}