import { BigPageComponent } from "../home-page/big_page_component";
import { SocialLinks } from "../social-links";

const mainImage = require("../../images/news_page/header_image Cropped.png")
const secondImage = require("../../images/news_page/second Cropped.png")
const thirdImage = require("../../images/news_page/third Cropped.png")
const fourthImage = require("../../images/news_page/fourth Cropped.png")

export function NewsPage(){
    return(
        <div className="news_page">
            <BigPageComponent direction={1}
            size={0}
            mediumTitle="Interview: Connor Herson on Doing ‘Empath’ (5.14d) on Gear"
            description="Originally graded 5.15a, it’s still considered one 
            of the world’s hardest trad pitches."
            date="SEPTEMBER 14, 2022"
            image1={mainImage}
            additionalChild={
                <div>
                    <p>Share</p>
                    <SocialLinks></SocialLinks>
                </div>
            }></BigPageComponent>

            <BigPageComponent direction={0}
            size={0}
            description="At 1:40 p.m. on May 22, Connor Herson stepped off his crashpad and started jamming the 
            flaring granite of Empath, then widely considered 5.15a. Herson skipped the 65-foot route’s 
            8 bolts and plugged his own—mostly bomber—protection; two No. 2s, an RP, and several 
            finger-sized cams, breathing intentionally through the crux’s runout to quiet the nervous 
            voice in his head. He topped out after seven minutes, physically pumped, mentally satisfied, and relieved.
            \ \
            Though he’s just 19, Herson needs little introduction. At age 15, he made the sixth free ascent of El 
            Cap’s Nose (VI 5.14a); at 17, he ticked his 50th 5.14 with the FA of Underage Linking (5.14d) at Jailhouse; 
            last year, calling on his extensive crack-climbing résumé, he broke Empath’s 5.15a beta and sent the route 
            after just two weekends of work; and, two months later, he established the 230-foot Kilogram (5.14a) in Tuolumne, 
            featuring thin face moves and a wild roof pull."
            image1={secondImage}></BigPageComponent>

            <BigPageComponent direction={1}
            size={0}
            description="Carlo Traversi made the first ascent of Empath in October 2020 and proposed 5.15a. 
            (Traversi, we should note, is a Valley regular with trad ticks of Magic Line (5.14b/c) 
            and Meltdown (5.14c.) So when the heavy grade of 5.15a was proposed, few thought Empath 
            could be climbed more easily with a crack-climbing approach—or that it would go fairly 
            reasonably on gear. But on the day Herson redpointed the route with bolts he’d brought a 
            rack to the cliff to suss out just that. “There weren’t many [placements], but there were enough.
            More than enough,” he says. Herson worked the route for a total of 12 days before sending sans bolts, 
            often sharing the route with other climbers, including Ethan Pringle, who’s climbed 5.14 on gear multiple 
            times. Pringle made the sixth ascent of Empath and later wrote that while the route may feel like 5.15a 
            with the first ascentionist’s beta, “with my height [5′10″] … [and] decent crack skills … it feels on par 
            with other higher-end 14+ routes I’ve done.” (Herson, we should also note, is 5′7″: the same height as Traversi.)"
            image1={thirdImage}></BigPageComponent>

            <BigPageComponent direction={0}
            size={0}
            description="As far as Herson knows, he and Alex Honnold are the only ones who’ve tried Empath without the bolts. 
            “I thought it seemed pretty hardcore on gear,” Honnold told me, “though I was trying it in the full 
            heat of the summer and only dabbled a few times. But the gear is definitely a little bit finicky and 
            it’s worst up at the top, right where the climbing is the hardest.”
            \ \
            I caught up with Herson by phone to talk about climbing Empath on bolts and then without them, 
            breaking the route’s “beta,” how solid the protection was, and the 5.14d grade—currently the only 
            trad route with the proposed grade. Our conversation has been edited for length and clarity."
            image1={fourthImage}></BigPageComponent>

        </div>
    );
}