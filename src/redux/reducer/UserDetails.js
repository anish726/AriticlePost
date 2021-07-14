

const initails = {
    userDetails:[]
}
  
function userDetails(state=initails,action){
    switch(action.type){
        case 'USER_DETAILS':
            return{
                ...state,
                userDetails:[...state.userDetails,action.payload]
            }
            default:
                return state

    }
}
 export default userDetails;