import { Blog } from "../hooks"
import { Avatar, CircleComp } from "./BlogsCard"

export const BlogContent = ({ blog }: { blog: Blog }) => {
    const date = new Date(blog.updatedAt)
    const options: Intl.DateTimeFormatOptions ={ 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return (
        <div>
            <div className="mt-10 font-bold text-4xl">
                {blog.title}
            </div>
            <div className="my-8 flex items-center space-x-3">
                <div className="flex justify-center space-x-4">
                    <Avatar size="xl" name={blog.author?.name ?? "Anonymous"} />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center space-x-3">
                        <div>
                            {blog.author?.name ?? "Anonymous"}
                        </div>
                        <div>
                            <CircleComp h={0.5} w={0.5} />
                        </div>
                        <div className="text-green-600 cursor-pointer">
                            Follow
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <div className="text-slate-500 text-sm">
                            {Math.ceil(blog.content.length / 100)} min read
                        </div>
                        <div className="text-sm text-slate-500">
                            {formattedDate}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-8 p-2 border-b border-t flex justify-between">
                <div className="flex space-x-7">
                    <div className="flex text-slate-500 text-sm items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(168,168,168)" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>
                        <div>
                            719
                        </div>
                    </div>
                    <div className="text-slate-500 text-sm flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(168,168,168)" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                        </svg>
                        <div>
                            10
                        </div>
                    </div>
                </div>
                <div className="flex space-x-7">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(168,168,168)" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(168,168,168)" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(168,168,168)" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </div>
                </div>
            </div>
            <div>
                {blog.content}
            </div>
        </div>
    )
}