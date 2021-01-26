const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.message
        case 'CLEAR_NOTIFICATION':
            return state = null
        default:
            return state
    }
}

export const setNotification = (message, aika) => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            message
        })
        setTimeout(() => {
            dispatch(clearNotification())
        }, aika)
    }
}

const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION'
    }
}

export default notificationReducer