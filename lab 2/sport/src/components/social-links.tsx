const facebook_icon = require('../icons/global_icons/facebook.png')
const instagram_icon = require('../icons/global_icons/instagram.png')
const twitter_icon = require('../icons/global_icons/twitter.png')

export function SocialLinks(){
    return(
        <div>
            <ul className='horizontal_list'>
                <li className='social_link'><a href="" className='hover-underline-animation'><img src={facebook_icon} alt="" /></a></li>
                <li className='social_link'><a href="" className='hover-underline-animation'><img src={instagram_icon} alt="" /></a></li>
                <li className='social_link'><a href="" className='hover-underline-animation'><img src={twitter_icon} alt="" /></a></li>
            </ul>
        </div>
    );
}