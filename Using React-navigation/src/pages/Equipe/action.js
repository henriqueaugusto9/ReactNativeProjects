export const handlePlayers = (value) => {
    return {
        type: 'PLAYERS',
        payload: value
    }
}
export const getPlayers = () => (dispatch, getState) => {
    //function que da o get na api
}