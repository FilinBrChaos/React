import '../css/palette-style.css'
import Grid from '@mui/material/Grid'
import { animate, motion } from 'framer-motion'

interface PaletteProps{
    columns: number
    rowHeight: string
    colors: {name: string, value: string}[]
    functionality?: boolean
}
//TODO: deal with framer-motion
export function Palette(props: PaletteProps){
    let key = 0
    let duration = 0.5
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
                                                   className='Palette-Button'>COPY</motion.button>
                                </div>
                                <div className='Palette-ColorTitle'>{color.name}</div>
                            </div>
                        </div>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}