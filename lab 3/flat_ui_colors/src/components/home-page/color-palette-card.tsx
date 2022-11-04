import '../../css/home-page/color-palette-card-style.css'
import { Link } from 'react-router-dom'
import { Palette } from '../palette'
import data from '../../data/pallete.json'

interface ColorPaletteCardProps {
    id: number
}

export function ColorPaletteCard(props: ColorPaletteCardProps){
    const card = data[props.id]
    const colors = card.colors.map(item => ({name: item.name, value: item.color}))
    return(
         <Link to={`/picker/${props.id}`} className='ColorPaletteCard-Link'>
            <div className="ColorPaletteCard">
                <div>
                    <div className='ColorPaletteCard-Palette'>
                        <Palette columns={5} rowHeight="37.75px" colors={colors} hexType={0}></Palette>
                    </div>
                    <div className='ColorPaletteCard-TitleBlock'>
                        <p className='ColorPaletteCard-Title'>{card.paletteName}</p>
                        <p>{card.emoji}</p>
                    </div>
                </div>
            </div>
         </Link>
    )
}

