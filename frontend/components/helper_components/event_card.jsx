import React from 'react';

const EventCard = ({cardImage, month, day, date, title, time, venueName, city, state, price}) => {
    return ( 
        <div className="event-card">
            <aside className="event-card-picture" 
                style={{backgroundImage: `url(${cardImage})`}}
            />
            <main className="event-card-details">
                <div className="card-buttons">
                    <button className="event-card-share-button">
                        <img className="share-icon-img" src={window.shareIcon}/>
                    </button>
                    <button className="event-card-heart-button">
                        <img className="heart-icon-img" src={window.heartIcon}/>
                    </button>
                </div>
                <div className="date-details flex">
                    <div className="date-span">
                        <span className="month">
                            {month}
                        </span>
                        <span className="date">
                            {date}
                        </span>
                    </div>
                    <div className="card-details">
                        <span className="card-title">
                            {title}
                        </span>
                        <span className="card-date-time">
                            {`${day}, ${month}, ${time}`}
                        </span>
                        <span className="event-card-location">
                            {`${venueName}, ${city}, ${state}`}
                        </span>
                        <span className="card-price">
                            {`Starts at $${price}.00`}
                        </span>
                    </div>
                </div>
            </main>
        </div>
    );
}
 
export default EventCard;