import '../../css/big-page-component-style.css'

enum BigPageComponentDirection {
    right, left
}

enum BigPageComponentSize {
    big, small
}

interface BigPageComponentProps{
    direction?: BigPageComponentDirection
    size?: BigPageComponentSize
    smallTitle?: string
    mediumTitle?: string
    title?: string
    lightDescription?: string
    description?: string
    date?: string
    additionalChild?: React.ReactNode
    image1: string
    image2?: string
}

export function BigPageComponent(props: BigPageComponentProps){
    let globalComponentStyle: string = "big_page_component"
    let titleStyle: string = "big_page_component__title"
    let lightDescriptionStyle = "big_page_component__light_description"
    
    if (props.direction === BigPageComponentDirection.right) globalComponentStyle += " big_page_component_right_direction"
    else globalComponentStyle += " big_page_component_left_direction"

    if (props.size === BigPageComponentSize.big) globalComponentStyle += " big_page_component_big"
    else {
        globalComponentStyle += " big_page_component_small"
        titleStyle = "big_page_component__title_light"
        lightDescriptionStyle = "big_page_component__light_description_light"
    }
    return(
        <div className={globalComponentStyle}>
            <div className={props.direction === BigPageComponentDirection.left ? 'big_page_component__info_block_right' : 'big_page_component__info_block'}>
                <p className={props.smallTitle ? 'big_page_component__small_title' : 'hidden'}>{NewLineText(props.smallTitle)}</p>
                <p className={props.mediumTitle ? 'big_page_component__medium_title' : 'hidden'}>{NewLineText(props.mediumTitle)}</p>
                <p className={props.title ? titleStyle : 'hidden'}>{NewLineText(props.title)}</p>
                <p className={props.lightDescription ? lightDescriptionStyle : 'hidden'}>{NewLineText(props.lightDescription)}</p>
                <p className={props.description ? 'big_page_component__description' : 'hidden'}>{NewLineText(props.description)}</p>
                <p className={props.date ? 'big_page_component__date' : 'hidden'}>{props.date}</p>
                {props.additionalChild}
            </div>
            <div className="big_page_component__image_block">
                <img src={props.image1} alt="" className={props.image2 ? 'big_page_component__image1' : 'big_page_component__image1_big'}/>
                <img src={props.image2} alt="" className={props.image2 ? 'big_page_component__image2' : 'hidden'}/>
            </div>
        </div>
    );
}

function NewLineText(props?: string){
  const text = props;
  const newText = text?.split("\\").map(str => <p>{str}<br/></p>);
  
  return newText;
}