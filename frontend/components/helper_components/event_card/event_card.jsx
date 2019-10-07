import React from 'react';
import EventCardPicture from './event_card_picture';
import EventCardDetails from './event_card_details';
import FreeTag from './free_tag';

export const EventCards = (props) => (
    <div className="events-cards">
        {props.children}
    </div>
);

export const EventCard = ({ cardImage, month, day, date, title, time, venueName, city, state, price, eventId, onLikeClick, liked }) => { 
    let addressOrUrl = !city ? `${venueName}` : `${venueName}, ${city}, ${state}`;
    let heartIconImg = liked ? window.redHeartIcon : window.heartIcon;
    let freeTag = price === 0 ? <FreeTag/> : null;

    return (
        <div className="event-card">
            <EventCardPicture freeTag={freeTag} eventId={eventId} cardImage={cardImage}/>
            <EventCardDetails 
                title={title} 
                eventId={eventId} addressOrUrl={addressOrUrl}
                onLikeClick={onLikeClick} heartIconImg={heartIconImg} 
                month={month} date={date} day={day} time={time}
                price={price}
            />
        </div>
    );
};

 