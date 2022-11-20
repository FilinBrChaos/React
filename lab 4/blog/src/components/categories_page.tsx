import { blogCategories, categoriesPageSubHeaderDescription, categoriesPageSubHeaderTitle, ourBlog, viewAll } from "../constants/pages_data";
import { DropdownOptions } from "./dropdown_options";
import { Navbar } from "./navbar";
import cards from '../data/blogs_data.json'
import { HomeFooter } from "./home_footer";
import { CategoriesPageBlogCardSquare } from "./categories_page_blog_card_square";
import { useMemo, useState } from "react";
import { CategoriesPageCategoriesSideSelector } from "./categories_page_categories_side_selector";

export function CategoriesPage(){
    const [filterCategory, setFilterCategory] = useState(viewAll);
    const renderedCards = useMemo(() => {
        if (filterCategory == viewAll) return cards
        let result = cards.filter((card) => card.tegs.includes(filterCategory))
        return result
    },[filterCategory])

    let categoriesList: string[] = useMemo(() => {
        let allCategories: string[] = [viewAll];
        for (let i = 0; i < cards.length; i++) allCategories = allCategories.concat(cards[i].tegs.split(','))
        
        let result = allCategories.filter((categorie, index, self) => {
        return self.indexOf(categorie) === index
        })
        return result
    }, [])
    
    return(
        <div className="w-full">
            <Navbar></Navbar>
            <div className=" px-4 pt-16 lg:px-28 lg:pt-24">
                <p className="text-sm lg:text-base font-semibold text-[#7F56D9]">{ourBlog}</p>
                <p className="text-4xl lg:text-5xl font-semibold mt-3">{categoriesPageSubHeaderTitle}</p>
                <p className="text-lg lg:text-xl font-normal mt-6">{categoriesPageSubHeaderDescription}</p>
            </div>
            <div className="px-4 lg:px-28 mt-16 lg:mt-24">
                <div className="lg:hidden">
                    <div className="mb-12">
                        <DropdownOptions title="View all" 
                        options={categoriesList.map((item, index) => {return {title: item, onClickHandler: () => {}}})}></DropdownOptions>
                    </div>
                    <div className="w-full sm:grid sm:grid-cols-2 sm:gap-5">
                        {renderedCards!.map((card, index) => <CategoriesPageBlogCardSquare card={card} key={index}></CategoriesPageBlogCardSquare>)}
                    </div>
                </div>

                <div className="hidden lg:flex lg:flex-row">
                    <div className="flex flex-col items-start w-[500px]">
                        <input type="text" className="h-11 w-full rounded-lg border-[#D0D5DD] border-[1px] p-[14px]" placeholder="Search" />
                        <p className=" text-sm font-semibold text-[#6941C6] mt-9 mb-5">{blogCategories}</p>
                        <CategoriesPageCategoriesSideSelector categoriesList={categoriesList} selected={filterCategory} setSelected={setFilterCategory}></CategoriesPageCategoriesSideSelector>
                    </div>
                    <div className="ml-16 w-max">
                        <CategoriesPageBlogCardSquare card={renderedCards.shift()} extended={true}></CategoriesPageBlogCardSquare>
                        <div className="w-full grid sm:grid-cols-2 2xl:grid-cols-3 gap-5">
                            {renderedCards!.map((card, index) => <CategoriesPageBlogCardSquare card={card} key={index}></CategoriesPageBlogCardSquare>)}
                        </div>
                    </div>
                </div>

            </div>
            <HomeFooter light={true}></HomeFooter>
        </div>
    )
}
