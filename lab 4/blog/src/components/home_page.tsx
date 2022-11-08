import { search } from "../constants/pages_data";
import { HomePageBlogCardRounded } from "./home_page_blog_card_rounded";
import { HomePageSubHeader } from "./home_page_subheader";
import { Navbar } from "./navbar";
import cards from '../data/blogs_data.json'
import { CardPagesSwitcher } from "./card_pages_switcher";
import { useState } from "react";

export function HomePage(){
    const [currentPage, setCurrentPage] = useState(1)
    const cardsOnPage = 8
    const pages = Math.floor(cards.length / cardsOnPage) + 1
    const thisPage = cards.slice((currentPage - 1) * cardsOnPage, (currentPage - 1) * cardsOnPage + 8)

    return(
        <div>
            <Navbar></Navbar>
            <HomePageSubHeader></HomePageSubHeader>
            <div className="w-full pt-16 px-4 lg:py-24 lg:px-28">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <input type="text" className="w-full lg:w-[280px] h-11 rounded-lg border-[#D0D5DD] border-[1px] p-[14px]" placeholder={search}/>
                    <input type="text" className="w-full lg:w-[280px] h-11 rounded-lg border-[#D0D5DD] border-[1px] p-[14px] mt-4 lg:mt-0"/>
                </div>
                {/* <div className="w-full mt-12 sm:flex sm:flex-wrap sm:justify-around"> */}
                <div className="w-full mt-12 sm:grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-5">
                    {thisPage.map((element, index) => <div className="box"><HomePageBlogCardRounded card={element} key={index}></HomePageBlogCardRounded></div>)}
                </div>
                <CardPagesSwitcher currentPage={currentPage} maxPage={pages} setCurrentPage={setCurrentPage}></CardPagesSwitcher>
            </div>
        </div>
    )
}