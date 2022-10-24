import '../css/footer.css'
import '../index.css'

import { SocialLinks } from './social-links'

const web_page_icon = require('../icons/global_icons/web-page-icon.png')
const send_button_icon = require('../icons/global_icons/send-button-icon.png')

export function Footer(){
    return(
        <div className='footer_wraper'>
            <footer className="footer">
                <img src={web_page_icon} alt="" className="web_page_icon"/>
                <div className="footer__our_contact">
                    <p className="footer__title">Our Contact</p>
                    <p className="footer__description">Office: Cherkasy, Ukrain</p>
                    <p className="footer__description">Help: +380(23) 584 19 68</p>
                    <p className="footer__description">Email <a href="#">Someemail@gmail.com</a></p>
                </div>
                <div className="footer__about_us">
                    <p className="footer__title">About us</p>
                    <p className="footer__description">something about us</p>
                </div>
                <div className="footer__subscribe">
                    <p className="footer__title">Subscribe</p>
                    <div className="footer__subscribe__email_input">
                        <input type="text" className="footer__subscribe__email_input__text_box" placeholder="Your email"/>
                        <img src={send_button_icon} className="footer__subscribe__email_input__send_button"/>
                    </div>
                    <p className="footer__title footer__follow_us">Follow Us</p>
                    <SocialLinks></SocialLinks>
                </div>
            </footer>
        </div>
    );
}