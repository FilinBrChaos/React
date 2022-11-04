import '../../css/home-page/home-header-style.css'
import { mainPageHeaderLinksNames, mainPageTitle } from '../../constants/constants'

export function HomeHeader(){
    return(
        <div className="HomeHeader">
            <div className="HomeHeader-Content">
                <h1 className="HomeHeader-Title">{mainPageTitle}</h1>
                <div>
                    {mainPageHeaderLinksNames.map((link, index) => <a href="#" className='HoverUnderlineAnimation' key={index}>{link}</a>)}
                </div>
            </div>
        </div>
    )
}