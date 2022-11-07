import { Link } from "react-router-dom"

const bottomArrow = require("../assets/icons/bottom_arrow.png")

interface NavbarAndroidMenuItemProps {
    title: string
    link?: string
}

export function NavbarAndroidMenuItem(props: NavbarAndroidMenuItemProps){
    return(
        <Link to={props.link ? props.link : "#"}>
            <div className="flex items-center justify-between w-full h-16 px-4">
                <p className="text-sm">{props.title}</p>
                <img src={bottomArrow} alt="" className="w-5 h-5"/>
            </div>
        </Link>
    )
}