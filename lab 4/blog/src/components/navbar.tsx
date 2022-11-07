import { MotionConfig } from "framer-motion";
import { useState } from "react";
import { burgerMenuStates, webPageLogo } from "../constants/pages_data";
import { NavbarAndroidMenuItem } from "./navbar_android_menu_item";
import { motion } from "framer-motion";

export function Navbar(){
    const [menuIconState, setMenuIconState] = useState(false)

    return(
        <div className="flex flex-col lg:flex-row bg-[#F9FAFB] drop-shadow-sm">
            <div className="px-3.5 flex flex-row items-center justify-between w-screen h-20">
                <div className="flex flex-row h-min">
                    <img src={webPageLogo.icon} className="w-8 h-8"></img>
                    <p className=" text-base font-medium">{webPageLogo.title}</p>
                </div>

                <div className=" lg:hidden w-6 h-6" onClick={() => {setMenuIconState(!menuIconState)}}>
                    <img src={menuIconState ? burgerMenuStates.active : burgerMenuStates.general} alt=""/>
                </div>
            </div>
            {menuIconState ?
                <motion.div  className="w-full bg-white" initial={{opacity: 0}} animate={{opacity: 1}}>
                    <NavbarAndroidMenuItem title="Item1"></NavbarAndroidMenuItem>
                    <NavbarAndroidMenuItem title="Item2"></NavbarAndroidMenuItem>
                </motion.div>
                :
                null
            }
        </div>
    )
}