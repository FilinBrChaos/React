import '../../css/color-picker/color-picker-style.css'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Palette } from '../palette'
import { DropdownMenu } from './dropdown-menu'

export function ColorPicker(){
    const location = useLocation()
    const navigate = useNavigate()
    const [hexType, setHexType] = useState(0)

    const cardData: {title: string, emoji: string, colors:{name: string, value: string}[]} = location.state?.card
    const buttons: {title: string, onClick: () => void}[] = [
        {title: "HEX (#AA1923)", onClick: () => {setHexType(0)}}, 
        {title: "HEX (AA1923)", onClick: () => {setHexType(1)}}, 
        {title: "RGB - (1,2,3)", onClick: () => {setHexType(2)}}, 
        {title: "RGBA - (1,2,3,0.4)", onClick: () => {setHexType(3)}}, 
        {title: "☝️  Want more colors?", onClick: () => {}}, 
        {title: "👋  Feedback", onClick: () => {}}]

    return(
        <div className='ColorPicker overflow-hidden'>
            <div className='ColorPicker-Header'>
                <button className='ColorPicker-TextStyle' onClick={() => {navigate(-1)}}>← Back</button>
                    <div className='ColorPicker-TextStyle'>
                        <DropdownMenu title={'Copy Format:' + buttons[hexType].title} buttons={buttons}></DropdownMenu>
                    </div>
                <p className='ColorPicker-TextStyle'>Sound On</p>
            </div>
            <div className='ColorPicker-Palette'>
                <Palette columns={5} rowHeight="22.5vh" colors={cardData.colors} functionality={true} hexType={hexType}></Palette>

            </div>
            <div className='ColorPicker-Footer'>
                <p className='ColorPicker-TextStyle'>{cardData.title} {cardData.emoji}</p>
            </div>
        </div>
    )
}