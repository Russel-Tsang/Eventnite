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