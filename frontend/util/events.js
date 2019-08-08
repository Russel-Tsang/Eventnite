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

export const fetchedCreatedEvents = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/created_events`,
        data: { userId }
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

export const deleteEvent = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/events/${id}`
    })
}

// submit a picture
export const updatePictureAndDescription = (pictureAndDescription, eventId) => {
    return $.ajax({
        url: `/api/events/${eventId}`,
        method: 'PATCH',
        data: pictureAndDescription,
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

// unregister for an event
export const deleteRegistration = (eventId, registrationId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/events/${eventId}/registrations/${registrationId}`
    })
}