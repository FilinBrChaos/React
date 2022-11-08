import { search } from "../constants/pages_data";
import { HomePageSubHeader } from "./home_page_subheader";
import { Navbar } from "./navbar";


export function HomePage(){
    return(
        <div>
            <Navbar></Navbar>
            <HomePageSubHeader></HomePageSubHeader>
            <div className="w-full pt-16 px-4 lg:py-24 lg:px-28">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <input type="text" className="w-full lg:w-[280px] h-11 rounded-lg border-[#D0D5DD] border-[1px] p-[14px]" placeholder={search}/>
                    <input type="text" className="w-full lg:w-[280px] h-11 rounded-lg border-[#D0D5DD] border-[1px] p-[14px] mt-4 lg:mt-0"/>
                </div>
            </div>
        </div>
    )
}