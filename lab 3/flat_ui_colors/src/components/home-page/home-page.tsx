import '../../css/home-page/home-page-style.css'
import { ColorPaletteCard } from './color-palette-card'
import { HomeHeader } from './home-header'
import data from '../../data/pallete.json'
import { Grid } from '@mui/material'

export function HomePage(){
    let key = 0
    return(
        <div>
            <HomeHeader></HomeHeader>
            <div className="HomePage">
                <div className='HomePage-Content'>
                   <Grid container columns={3} columnSpacing={7}>
                        {data.map(card => 
                            <Grid item xs={1} key={key++}>
                                <ColorPaletteCard title={card.paletteName} 
                                                  colors={card.colors.map(item => ({name: item.name, value: item.color}))} 
                                                  emoji={card.emoji}></ColorPaletteCard>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </div>
        </div>
    )
}