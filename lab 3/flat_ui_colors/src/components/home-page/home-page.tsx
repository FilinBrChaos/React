import '../../css/home-page/home-page-style.css'
import { ColorPaletteCard } from './color-palette-card'
import { HomeHeader } from './home-header'
import data from '../../data/pallete.json'
import { Grid } from '@mui/material'
import { HomeFooter } from './home-footer'

export function HomePage(){
    return(
        <div>
            <HomeHeader></HomeHeader>
            <div className="HomePage">
                <div className='HomePage-Content'>
                   <Grid container columns={3} columnSpacing={7}>
                        {data.map((card, index) => 
                            <Grid item xs={1} key={index}>
                                <ColorPaletteCard id={index}></ColorPaletteCard>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </div>
            <HomeFooter></HomeFooter>
        </div>
    )
}