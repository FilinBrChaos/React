import { AnimatedLinkWithArrow } from "./animated-link-with-arrow"

interface FooterLinksBlockProps {
    title: string
    links: string[]
}

export function FooterLinksBlock(props: FooterLinksBlockProps){
    return(
        <div className="flex flex-col justify-between w-60 h-44">
            <p className=" text-base font-bold mb-5 text-slate-50 tracking-wider">{props.title}</p>
                {props.links.map((link, index) => <AnimatedLinkWithArrow key={index} title={link}></AnimatedLinkWithArrow>)}
        </div>
    )
}