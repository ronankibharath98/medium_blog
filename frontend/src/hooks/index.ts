import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"

export interface Blog {
    "id": string
    "title": string
    "content": string
    "thumbnail": string
    "tag": string
    "author": {
        "name": string
    }
}

export const useBlog = ( {id} : {id: string} ) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                    headers:{
                        Authorization: localStorage.getItem("token"),
                    }
                })
                setBlog(response.data.blog)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching blogs:', error); 
                alert(error); 
            }
        }
        fetchData();
    }, [])

    return({
        loading,
        blog
    })
}
 
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                    headers:{
                        Authorization: localStorage.getItem("token"),
                    }
                })
                setBlogs(response.data.blogs)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching blogs:', error); 
                alert(error); 
            }
        }
        fetchData();
    }, [])

    return({
        loading,
        blogs
    })
}