import '../css/header.css'
import '../index.css'
const headerIcon2 = require("../icons/global_icons/web-page-icon.png")

export function Header(){
    return(
        <header className="header">
            <img className="web_page_icon" src={headerIcon2}/>
            <ul className="horizontal_list">
                <li><a className="hover-underline-animation header__link" href="#">Home</a></li>
                <li><a className="hover-underline-animation header__link" href="#">About us</a></li>
                <li><a className="hover-underline-animation header__link" href="#">Portfolio</a></li>
                <li><a className="hover-underline-animation header__link" href="#">Testimony</a></li>
                <li><a className="hover-underline-animation header__link" href="#">News</a></li>
                <li><a className="hover-underline-animation header__link" href="#">Contact us</a></li>
            </ul>
        </header>
    );
}