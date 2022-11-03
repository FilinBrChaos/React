import '../css/palette-style.css'
import Grid from '@mui/material/Grid'
import { motion, AnimatePresence } from 'framer-motion'
import { FullscreenPopup } from './color-picker/fullscreen-popup'
import { useState, useEffect } from 'react'
import useSound from 'use-sound'
import { fullscreenPopupGreetingsArr } from '../data/constants'
const mySound = require("../data/copied.mp3")

interface PaletteProps{
    columns: number
    rowHeight: string
    colors: {name: string, value: string}[]
    soundState?: boolean
    functionality?: boolean
    hexType: number
}

export function Palette(props: PaletteProps){
    const [showPopup, setShowPopup] = useState(false)
    const [colorValue, setColorValue] = useState("")
    const [copyedColor, setCopiedColor] = useState("")

    const greetings = fullscreenPopupGreetingsArr
    const [playSound] = useSound(mySound)

    useEffect(() => {
        if (showPopup) {
            const timer = setTimeout(() => {
                setShowPopup(false)
            }, 700)
            return () => clearTimeout(timer)
        }
    }, [showPopup])
    let key = 0
    return(
        <div>
            <Grid container columns={props.columns}>
                {props.colors.map((color) =>
                    <Grid item xs={1} key={key++}>
                        <div style={{backgroundColor: color.value, height: props.rowHeight}}>
                            <div className={props.functionality ? 'PaletteFunctionality' : 'Hidden'}>
                                <div className='Palette-ButtonWraper hide-animation'>
                                    <motion.button whileHover={{rotate: [0, 10, -10, 5, -5, 0], transition: { duration: 0.5 }}} 
                                    whileTap={{scale: 0.9, transition: { duration: 0.05 }}}
                                    onClick={() => {
                                        let copyedColor = getCopiedColor(color.value, props.hexType)
                                        setShowPopup(true); 
                                        setColorValue(color.value); 
                                        setCopiedColor(copyedColor)
                                        if (props.soundState) playSound()
                                        navigator.clipboard.writeText(copyedColor)}}
                                    className='Palette-Button'>COPY</motion.button>
                                   
                                </div>
                                <div className='Palette-ColorTitle'>{color.name}</div>
                            </div>
                        </div>
                    </Grid>
                )}
            </Grid>
            <AnimatePresence>
                {showPopup ? <FullscreenPopup title={greetings[getRandomInt(greetings.length - 1)]} subTitle={copyedColor} color={colorValue}></FullscreenPopup> : null}
            </AnimatePresence>
        </div>
    )
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function getCopiedColor(color: string, hexType: number){
    let resultColor: string = ""
    switch (hexType){
        case 0: resultColor = color; break
        case 1: resultColor = deleteFirstChar(color); break
        case 2: resultColor = hexToRgb(color); break
        case 3: resultColor = hexToRgbA(color)
    }
    return resultColor
}

function deleteFirstChar(color: string){
    let arr = color.split('')
    arr.shift()
    return arr.join("")
}

function hexToRgbA(hex: string){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        let b: number = parseInt('0x'+c.join(''), 16);
        return [(b>>16)&255, (b>>8)&255, b&255].join(',')+',1';
    }
    throw new Error('Bad Hex');
}

function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
      parseInt(result[1], 16).toString() + ", " +
      parseInt(result[2], 16).toString() + ", " +
      parseInt(result[3], 16)
     : "null";
  }