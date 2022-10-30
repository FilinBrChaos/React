import '../../css/home-page/color-palette-card-style.css'
import { Link } from 'react-router-dom'
import { Palette } from '../palette'

interface ColorPaletteCardProps {
    title: string
    emoji: string
    colors: { name: string, value: string}[]
}

export function ColorPaletteCard(props: ColorPaletteCardProps){
    return(
         <Link to="/picker" state={{card: {title: props.title, emoji: props.emoji, colors: props.colors}}} className='ColorPaletteCard-Link'>
            <div className="ColorPaletteCard">
                <div>
                    <div className='ColorPaletteCard-Palette'>
                        <Palette columns={5} rowHeight="37.75px" colors={props.colors} functionality={false}></Palette>
                    </div>
                    <div className='ColorPaletteCard-TitleBlock'>
                        <p className='ColorPaletteCard-Title'>{props.title}</p>
                        <p>{props.emoji}</p>
                    </div>
                </div>
            </div>
         </Link>
    )
}

