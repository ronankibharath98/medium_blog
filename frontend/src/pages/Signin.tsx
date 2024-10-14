import { Quote } from "../components/Quote"
import { Auth } from "../components/AuthComp"

export const Signin = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type = "signin"/>
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    )
}
