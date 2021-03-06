// create a new user
export const postSession = (user) => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    });
};

// sign user in
export const postUser = (user) => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user }
    });
};

// log out user
export const deleteSession = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    });
};

// check if user is in database 
export const verifyUser = (email) => {
    return $.ajax({
        url: '/api/verify_user',
        method: 'GET',
        data: { user: { email } }
    });
}