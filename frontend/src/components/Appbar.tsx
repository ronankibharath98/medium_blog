import { Link } from "react-router-dom"
import { Avatar } from "./BlogsCard"

export const Appbar = () => {
    return (
        <div className="border-b border-slate-200 px-10 py-2 flex justify-between">
            <div className="font-bold text-3xl cursor-pointer flex flex-col justify-center">
                Medium
            </div>
            <div className="flex items-center space-x-4">
                <div className="text-xs border rounded-full p-2 bg-green-600 text-slate-50">
                    <Link to={"/publish"}>
                    <button >Publish</button>
                    </Link>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(100 116 139)" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(100 116 139)" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </div>
                <div>
                    <Avatar size="l" name="Bharath Ronanki" />
                </div>
                <div className="border-b border-slate-200 ">

                </div>
            </div>
        </div>
    )
}