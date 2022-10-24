import '../../css/home_page/news-card-style.css'

interface NewsCardProps {
    image: string
    date: string
    autor: string
    description: string
}

export function NewsCard(props: NewsCardProps){
    return (
        <div className="news_card">
            <img src={props.image}/>
            <p className="news_card__info">{props.date} by {props.autor}</p>
            <p className="news_card__description">{props.description}</p>
            <a className="hover-underline-animation">Read more</a>
        </div>
    );
}