import '../css/animated-text-link-style.css'

import { Link } from 'react-router-dom';

interface AnimatedTextLinkProps {
    text: string
    checked: boolean
    path?: string
}

export function AnimatedTextLink(props: AnimatedTextLinkProps){
    let className = ""
    if (props.checked) className = "checked_link hover-underline-animation-blue"
    else className = "regular_link hover-underline-animation"
    return(
        <Link to={props.path ? props.path : "#"} className={className}>{props.text}</Link>
    )
}