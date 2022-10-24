import '../../css/home_page/climbing-type-card-style.css'

interface ClimbingTypeCardProps {
    icon: string
    title: string
    description: string
    icon_frame_color: string
}

export function ClimbingTypeCard(props: ClimbingTypeCardProps){
    return(
        <div className="climbing_type_card">
            <div style={{background: props.icon_frame_color}} className="climbing_type_card__icon_frame">
                <img className='climbing_type_card__icon' src={props.icon}/>
            </div>
            <div>
                <p className="climbing_type_card__title">
                    {props.title}
                </p>
                <p className="climbing_type_card__description">
                    {props.description}
                </p>
            </div>
        </div>
    );
}