import { Link } from "react-router-dom"

interface BlogCardProps {
    id: string
    author: string,
    title: string,
    content: string,
    publishedDate: string,
    tag: string
}

export const BlogsCard = ({ id, author, title, content, publishedDate, tag }: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="p-4 border-b borderc-slate-200 pb-4">
                <div className="flex items-center space-x-2">
                    <div className="flex justify-center flex-col">
                        <Avatar size="small" name={author} />
                    </div>
                    <div className=" text-sm font-medium text-slate-700">
                        {author}
                    </div>
                    <div className="flex justify-center flex-col">
                        <CircleComp />
                    </div>
                    <div className="text-sm text-slate-500">
                        {publishedDate}
                    </div>
                </div>
                <div className="mt-2 font-bold text-2xl">
                    {title}
                </div>
                <div className="font-light text-slate-800">
                    {content.slice(0, 140)}...
                </div>
                <div className="mt-10 ml-2 mr-2 flex justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="inline bg-gray-200 rounded-full p-2 text-xs font-normal">
                            {tag}
                        </div>
                        <div className="text-slate-500 text-sm">
                            {Math.ceil(content.length / 100)} min read
                        </div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(100 116 139)" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(100 116 139)" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(100 116 139)" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    )
}

const CircleComp = () => {
    return (
        <div className="h-1 w-1 rounded-full bg-slate-500">
        </div>
    )
}

export const Avatar = ({ name, size = "small" }: { name: string, size: "small" | "big" }) => {
    return (
        <div className={`relative inline-flex items-center justify-center ${size == "small" ? "w-6 h-6" : "w-10 h-10"}  overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600 cursor-pointer`}>
            <span className={`font-normal ${size == "small" ? "text-xs" : "text-md"} text-gray-600 dark:text-gray-300`}>
                {
                    name.split(" ").length > 1 ? name.split(" ")[0].charAt(0) + name.split(" ")[1].charAt(0)
                        : name.split("")[0]
                }
            </span>
        </div>
    )
}