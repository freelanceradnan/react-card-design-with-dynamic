
const Card=(card)=>{
    return(
        <>
        
        <div className="card-body">
            <img src={card.img} alt="card-image"/>
            <div className="card-bottom-part">
                <div className="card-day">{card.day} Days Ago</div>
            <div className="card-post">Post {card.post}</div>
            <div className="card-para">{card.paragraph}</div>
            <div className="card-bottom">
                <div className="card-bottom-left">
                <div className="card-bottom-left-title">{card.title_one}</div>
                <div className="card-bottom-left-text">{card.paragraph_one}</div>
                </div>
                <div className="card-bottom-center">
                    <div className="card-bottom-left-title">{card.title_two}</div>
                    <div className="card-bottom-left-text">{card.paragraph_two}</div>
                </div>
                <div className="card-bottom-right">
                    <div className="card-bottom-left-title">{card.title_three}</div>
                    <div className="card-bottom-left-text">{card.paragraph_three}</div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Card