import { moreFooterLinksNames, moreTitle, shareFooterLinksNames, shareTitle, descriptionTitle, footerDescriptionText } from "../../data/constants";
import { FooterLinksBlock } from "./footer-links-block";


export function HomeFooter(){
    return(
        <div className="flex justify-center w-full h-72 mt-20 pt-10 bg-black/50">
            <div className="w-[1024px] flex flex-row">
                <FooterLinksBlock title={shareTitle} links={shareFooterLinksNames}></FooterLinksBlock>
                <FooterLinksBlock title={moreTitle} links={moreFooterLinksNames}></FooterLinksBlock>
                <div className="flex flex-col h-44">
                    <p className=" text-base font-bold mb-5 text-slate-50 tracking-wider">{descriptionTitle}</p>
                    <div className="text-slate-50 text-sm font-bold tracking-wider leading-7">{footerDescriptionText}</div>
                </div>
            </div>
        </div>
    )
}