import '../../css/color-picker/color-picker-style.css'
import { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { Palette } from '../palette'
import { DropdownMenu } from './dropdown-menu'
import { colorPicker_HexTypeButtons_Names, soundOff, soundOn } from '../../constants/constants'
import data from '../../data/pallete.json'

export function ColorPicker(){
    const cardId = useLoaderData()
    const card = data[typeof cardId === 'number' ? cardId : 0]
    const colors = card.colors.map(item => ({name: item.name, value: item.color}))

    const [hexType, setHexType] = useState(0)
    const [sound, setSound] = useState(true)

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
                <Link to={"/"} className='ColorPicker-TextStyle' >← Back</Link>
                    <div className='ColorPicker-TextStyle'>
                        <DropdownMenu title={'Copy Format:' + buttons[hexType].title} buttons={buttons}></DropdownMenu>
                    </div>
                <button className='ColorPicker-TextStyle' onClick={() => {setSound(!sound)}}>{sound ? soundOn : soundOff}</button>
            </div>
            <div className='ColorPicker-Palette'>
                <Palette columns={5} rowHeight="22.5vh" colors={colors} functionality={true} soundState={sound} hexType={hexType}></Palette>
            </div>
            <div className='ColorPicker-Footer'>
                <p className='ColorPicker-TextStyle'>{card.paletteName} {card.emoji}</p>
            </div>
        </div>
    )
}