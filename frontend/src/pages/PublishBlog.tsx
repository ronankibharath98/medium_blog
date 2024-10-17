import { ChangeEvent, useState } from "react"
import { Appbar } from "../components/Appbar"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const PublishBlog = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()

    const handleOnChange = (e : ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name == "title") {
            setTitle(value)
        } else if (name == "content") {
            setContent(value)
        }
    }
    const handleOnClick = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`, {
                title: title,
                content: content
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            // console.log(response)
            navigate(`/blog/${response.data.blog.id}`)
        } catch (error) {
            console.log("", error)
        }

    }
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="mt-6 max-w-screen-lg sm:px-6 md:px-8 w-full space-y-2">
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleOnChange}
                        className="block w-full p-4 focus: outline-none text-gray-800 placeholder-slate-300 border border-gray-100 rounded-lg text-4xl"
                        placeholder="Title" />
                    <TextEditor content={content} handleOnChange={handleOnChange} />
                    <button onClick={handleOnClick} className="inline-flex items-center bg-blue-700 hover:bg-blue-600 px-5 py-2.5 rounded-full text-white">
                        Publish
                    </button>
                </div>
            </div>

        </div>
    )
}

interface TextEditorProps {
    content: string
    handleOnChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const TextEditor = ({content, handleOnChange}: TextEditorProps) => {
    return (
        <div>
            <div className="bg-white overflow-hidden">
                <textarea
                    name= "content"
                    value= {content}
                    onChange={handleOnChange}
                    rows={4}
                    className="block p-2.5 w-full text-lg focus:outline-none text-gray-800 placeholder-slate-300 rounded-lg border border-gray-100"
                    placeholder="Tell your story..." />
            </div>

        </div>
    )
}