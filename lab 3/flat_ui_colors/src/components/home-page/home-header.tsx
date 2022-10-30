import '../../css/home-page/home-header-style.css'

export function HomeHeader(){
    return(
        <div className="HomeHeader">
            <div className="HomeHeader-Content">
                <h1 className="HomeHeader-Title">FLAT UI COLORS</h1>
                <div>
                    <a href="#" className='HoverUnderlineAnimation'>Designer Inspiration</a>
                    <a href="#" className='HoverUnderlineAnimation'>Subscribe</a>
                </div>
            </div>
        </div>
    )
}