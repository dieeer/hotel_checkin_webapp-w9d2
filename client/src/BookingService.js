const baseURL = 'http://localhost:9000/api/bookings/'

// Fetch a list of all bookings
export const getBookings = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

// Returns a json representation of a post booking
export const postBooking = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

// Fetch a single DELETE statement.
export const deleteBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}