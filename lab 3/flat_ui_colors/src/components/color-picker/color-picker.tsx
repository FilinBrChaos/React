import '../../css/color-picker/color-picker-style.css'
import { useLocation } from 'react-router-dom'
import { Palette } from '../palette'
import Grid from '@mui/material/Grid'

export function ColorPicker(){
    const location = useLocation()
    const card: {title: string, emoji: string, colors:{name: string, value: string}[]} = location.state?.card
    let key = 0

    return(
        <div className='ColorPicker'>
            <div className='ColorPicker-Header'>
                <p className='ColorPicker-TextStyle'>← Back</p>
                <p className='ColorPicker-TextStyle'>HEX</p>
                <p className='ColorPicker-TextStyle'>Sound On</p>
            </div>
            <div className='ColorPicker-Palette'>
                <Palette columns={5} rowHeight="22.5vh" colors={card.colors} functionality={true}></Palette>

            </div>
            <div className='ColorPicker-Footer'>
                <p className='ColorPicker-TextStyle'>{card.title} {card.emoji}</p>
            </div>
        </div>
    )
}