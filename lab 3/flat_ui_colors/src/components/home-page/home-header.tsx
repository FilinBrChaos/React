import '../../css/home-page/home-header-style.css'
import { mainPageHeaderLinksNames, mainPageTitle } from '../../data/constants'

export function HomeHeader(){
    return(
        <div className="HomeHeader">
            <div className="HomeHeader-Content">
                <h1 className="HomeHeader-Title">{mainPageTitle}</h1>
                <div>
                    {mainPageHeaderLinksNames.map(link => <a href="#" className='HoverUnderlineAnimation'>{link}</a>)}
                </div>
            </div>
        </div>
    )
}