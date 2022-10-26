import React from 'react';
import '../css/header.css'
import '../index.css'
const web_page_icon = require("../icons/global_icons/web-page-icon.png")

interface HeaderProps {
    links: React.ReactNode[]
}

export function Header(props: HeaderProps){
    return(
        <header className="header">
            <img className="web_page_icon" src={web_page_icon}/>
            <ul className="horizontal_list">
                {ParseIntoList(props.links)}
            </ul>
        </header>
    );
}

function ParseIntoList(links: React.ReactNode[]) {
    let result = links.map(link => <li>{link}</li>)
    return result
}