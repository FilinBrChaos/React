import { Link } from "react-router-dom"
import { allRightsReserved, enterYourEmail, homeFooterLinks, stayUpToDate, subscribe, termsPrivacyCookiesLinks, webPageLogo } from "../constants/pages_data"

interface HomeFooterProps {
    bgColor?: string
}

export function HomeFooter(props: HomeFooterProps) {
    return(
        <div className={"w-full py-12 px-4 lg:px-28 lg:pt-16 lg:pb-12" + (props.bgColor ? props.bgColor : " bg-[#1D2939]")}>
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-row">
                        <img src={webPageLogo.iconLight} className="w-8 h-8 mr-2"></img>
                        <p className="text-base text-white font-medium self-center mr-10">{webPageLogo.title}</p>
                    </div>

                    <div className="flex flex-row mt-8 w-full lg:hidden">
                        <div className="flex flex-col w-1/2">
                            {homeFooterLinks.slice(0, homeFooterLinks.length/2).map((link, index) => <FooterLink key={index} linkObj={link}></FooterLink>)}
                        </div>
                        <div className="flex flex-col w-1/2">
                            {homeFooterLinks.slice(homeFooterLinks.length/2, homeFooterLinks.length).map((link, index) => <FooterLink key={index} linkObj={link}></FooterLink>)}
                        </div>
                    </div>
                    <div className="hidden mt-8 lg:flex">
                        <HorizontalList childs={homeFooterLinks.map((link, index) => <FooterLink key={index} linkObj={link}></FooterLink>)}></HorizontalList>
                    </div>
                </div>

                <div className="mt-16 lg:mt-0 w-full lg:w-auto">
                    <p className="text-sm font-semibold text-white">{stayUpToDate}</p>
                    <div className="flex flex-col lg:flex-row">
                        <input type="text" className="w-full lg:w-56 h-11 mt-4 rounded-lg border-[#D0D5DD] border-[1px] p-[14px]" placeholder={enterYourEmail}/>
                        <button className="w-full lg:w-28 lg:ml-4 h-11 mt-4 rounded-lg bg-[#7F56D9] text-white text-base font-semibold">{subscribe}</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse lg:justify-between mt-12 border-t border-[#bbc2cc] pt-8">
                <HorizontalList childs={termsPrivacyCookiesLinks.map((link, index) => <FooterLink light={true} linkObj={link} key={index}></FooterLink>)}></HorizontalList>
                <p className="mt-4 lg:mt-0 text-[#D0D5DD]">{allRightsReserved}</p>
            </div>
        </div>
    )
}

interface HorizontalListProps {
    childs: React.ReactNode[]
}

function HorizontalList(props: HorizontalListProps){
    return(
        <ul className=" h-min list-none inline-flex">
            {props.childs.map((child, index) => <li key={index}>{child}</li>)}
        </ul>
    )
}

interface FooterLinkProps {
    linkObj: {title: string, link: string}
    light?: boolean
}

function FooterLink(props: FooterLinkProps){
    return(
        <Link to={props.linkObj.link} className={props.light ? "text-[#D0D5DD] font-normal text-base mr-4" : "text-[#EAECF0] font-semibold text-base mr-8 mb-3"}>
            {props.linkObj.title}
        </Link>
    )
}