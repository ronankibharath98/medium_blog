import { ChangeEvent, useState } from "react"
import { SignupInput } from "@bronanki/medium-common"
import { Link, Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"


export const Auth = ({type}:{type: "signin" | "signup"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = async() => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user${type === "signin" ? '/signin' : '/signup'}`, postInputs)
            const jwt = response.data.jwt
            localStorage.setItem("token", jwt)
            navigate("/blogs")
        } catch (error) {
            
        }
    }

    return (
        <div className="flex justify-center h-screen">
            <div className="flex flex-col text-center justify-center">
                <div className="px-10 mb-5 text-center">
                    <div className="text-3xl font-bold">
                        {type == "signin"? "Signin to account" : "Create an account"}
                    </div>
                    <div className="flex justify-center text-gray-500 font-normal">
                        <div>{type === "signin" ? "Don't have an account?" : "Already have an account?"} </div>
                        <Link className="pl-2 underline" to={type == "signin"? "/signup":"/signin"}>
                            {type == "signin"? "Signup" : "Login"}
                        </Link>
                    </div>
                </div>
                <div>
                    {type === "signup" ? <LabelInput label="Username" placeholder="jerald cooper" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} /> : null }     
                </div>
                <div>
                    <LabelInput label="Email" placeholder="xyz@domain.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />
                </div>
                <div>
                    <LabelInput label="Password" type="password" placeholder="abc@123" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                </div>
                <button onClick={handleSubmit} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    {type === "signin" ? "Sign in" : "Sign up"}
                </button>
            </div>

        </div>
    )
}

interface LabelInputTypes {
    label: string,
    type?: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const LabelInput = ({ label, type, placeholder, onChange }: LabelInputTypes) => {
    return (
        <div>
            <label className="text-left block font-semibold text-sm leading-6 text-gray-900">{label}</label>
            <div className="mt-2">
                <div className="mb-5 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full sm:max-w-md">
                    <input type={type || "text"} name={label} id={label} className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder={placeholder}
                        onChange={onChange} />
                </div>
            </div>

        </div>
    )
}