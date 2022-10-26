import '../../css/home_page/home-page-style.css'

import { Header } from '../header';
import { AnimatedTextLink } from '../animated-text-link';
import { BigPageComponent } from './big_page_component';
import { ClimbingTypeCard } from "./climbing-type-card";
import { NewsCard } from './news-card';

import BoulderClimbingIcon from '../../icons/home_page/boulder.svg'
import MountaineeringIcon from '../../icons/home_page/mountaineering1.svg'
import RockClimbingIcon from '../../icons/home_page/rock-climbing.svg'

const boulder_power_image = require("../../images/home_page/boulder_power.jpg")
const big_rock_image = require("../../images/home_page/big_rock.jpg")

const safety_image = require('../../images/home_page/safety.jpg')

const new1_image = require('../../images/home_page/new1.png')
const new2_image = require('../../images/home_page/new2.png')
const new3_image = require('../../images/home_page/new3.png')

export function HomePage(){
    return(
        <div style={{width: "100%"}}>
            <Header links={[
                <AnimatedTextLink text='Home' checked={true}></AnimatedTextLink>,
                <AnimatedTextLink text='About Us' checked={false}></AnimatedTextLink>,
                <AnimatedTextLink text='Portfolio' checked={false}></AnimatedTextLink>,
                <AnimatedTextLink text='Testimony' checked={false}></AnimatedTextLink>,
                <AnimatedTextLink text='News' checked={false} path="/news"></AnimatedTextLink>,
                <AnimatedTextLink text='Contact' checked={false}></AnimatedTextLink>
            ]}></Header>
            <div className="home_page">
                <div>
                    <BigPageComponent direction={0}
                    size={0}
                    smallTitle="NO PAIN NO GAIN"
                    title='FIND YOUR SUMMIT'
                    lightDescription='Climbing has many different disciplines 
                    and can be categorised into\four main areas'
                    image1={boulder_power_image}
                    image2={big_rock_image}
                    additionalChild={<button className='first_block__button'>I'm interested</button>}></BigPageComponent>

                    <div className='horizontal_card_wrapper'>
                        <ClimbingTypeCard icon={RockClimbingIcon}
                        icon_frame_color="rgb(87, 209, 199)"
                        title="Rock climbing"
                        description='Rock climbing is the process of ascending cliffs. 
                        It involves following certain routes on a rock face requiring the 
                        use of naturally formed handholds and footholds.'></ClimbingTypeCard>

                        <ClimbingTypeCard icon={BoulderClimbingIcon}
                        icon_frame_color="rgb(108, 101, 199)"
                        title='Boulder climbing'
                        description='Bouldering is rock climbing stripped down to its raw essentials. 
                        Your challenge is to climb short but tricky 
                        bouldering "problems"'></ClimbingTypeCard>

                        <ClimbingTypeCard icon={MountaineeringIcon}
                        icon_frame_color="rgb(97, 139, 187)"
                        title='Mountain climbing'
                        description='Mountaineering, or mountain climbing, is the sport of reaching, 
                        or trying to reach, high points in mountainous areas, mainly for the 
                        joy and thrill of the climb.'></ClimbingTypeCard>
                    </div>
                </div>

                <BigPageComponent direction={1}
                size={1}
                smallTitle="SAFETY"
                title='ALWAYS MIND YOUR SAFETY'
                lightDescription="Climbing is dangerous. You need to do everything you can to mitigate the effects of gravity and 
                falling. Redundancy is key. Always back-up every important piece of gear with another piece of gear and 
                use more than one anchor at a belay and rappel station. Your life depends on it. Beginner climbers are 
                most vulnerable to accidents. Always use sound judgment; respect climbing dangers; don't climb over your 
                head; find an experienced mentor or take climbing lessons from an experienced guide to learn how to climb 
                safely. Remember that most accidents happen because of climber error. Use the following 10 tips to keep safe 
                when you're out rock climbing."
                image1={safety_image}></BigPageComponent>
                
                <div className='blog_block'>
                    <div className='blog_block__header'>
                        <p className='blog_block__small_title'>Blog</p>
                        <h3 className='blog_block__big_title'>Read OurNews</h3>
                    </div>
                    <div className='horizontal_card_wrapper'>
                        <NewsCard image={new1_image}
                        date="October 17, 2022"
                        autor='Admin'
                        description="Interview: Connor Herson on Doing 'Empath' (5.14d) on Gear"></NewsCard>

                        <NewsCard image={new2_image}
                        date="October 17, 2022"
                        autor='Admin'
                        description="Meet the 12-Year-Old Denver-based Crusher Who Just Sent V14"></NewsCard>

                        <NewsCard image={new3_image}
                        date="October 17, 2022"
                        autor='Admin'
                        description="Best Climbing Documentaries On Netflix & Amazon Prime"></NewsCard>
                    </div>
                </div>
            </div>
        </div>
    );
}