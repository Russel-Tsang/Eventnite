// create an event 
export const postEvent = (event) => {
    return $.ajax({
        url: `/api/events`,
        method: 'POST',
        data: { event }
    })
}

// fetch event by id 
export const fetchEvent = (id) => {
    return $.ajax({
        url: `/api/events`,
        method: 'GET',
        data: { event: { id } }
    })
}