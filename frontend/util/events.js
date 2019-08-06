// create an event 
export const postEvent = (event) => {
    return $.ajax({
        method: 'POST',
        url: `/api/events`,
        data: { event }
    })
}

// fetch event by id 
export const fetchEvent = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/events/${id}`,
        data: { event: { id } }
    })
}
// fetch event by id 
export const fetchEvents = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/events/`
    })
}

// update an event
export const updateEvent = (event) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/events/${event.id}`,
        data: { event: event }
    })
}

// submit a picture
export const postPicture = photo => {
    return $.ajax({
        url: '/api/events',
        method: 'events',
        data: photo,
        contentType: false,
        processData: false
    });
}

// register for an event
export const postRegistration = (eventId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/events/${eventId}/registrations`
    })
}