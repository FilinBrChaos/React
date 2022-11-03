import '../../css/color-picker/color-picker-style.css'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Palette } from '../palette'
import { DropdownMenu } from './dropdown-menu'
import { colorPicker_HexTypeButtons_Names, soundOff, soundOn } from '../../data/constants'

export function ColorPicker(){
    const location = useLocation()
    const navigate = useNavigate()
    const [hexType, setHexType] = useState(0)
    const [sound, setSound] = useState(true)

    const cardData: {title: string, emoji: string, colors:{name: string, value: string}[]} = location.state?.card

    let buttons: {title: string, onClick: () => void}[] = []
    const btnNms = colorPicker_HexTypeButtons_Names

    for (let i = 0; i < btnNms.length; i++){
        let button: {title: string, onClick: () => void} = {title: "", onClick: () => {}}
        button.title = btnNms[i];
        if (i < 4) button.onClick = () => {setHexType(i)} 
        else button.onClick = () => {}
        buttons.push(button)
    }

    return(
        <div className='ColorPicker overflow-hidden'>
            <div className='ColorPicker-Header'>
                <button className='ColorPicker-TextStyle' onClick={() => {navigate(-1)}}>← Back</button>
                    <div className='ColorPicker-TextStyle'>
                        <DropdownMenu title={'Copy Format:' + buttons[hexType].title} buttons={buttons}></DropdownMenu>
                    </div>
                <button className='ColorPicker-TextStyle' onClick={() => {setSound(!sound)}}>{sound ? soundOn : soundOff}</button>
            </div>
            <div className='ColorPicker-Palette'>
                <Palette columns={5} rowHeight="22.5vh" colors={cardData.colors} functionality={true} soundState={sound} hexType={hexType}></Palette>

            </div>
            <div className='ColorPicker-Footer'>
                <p className='ColorPicker-TextStyle'>{cardData.title} {cardData.emoji}</p>
            </div>
        </div>
    )
}