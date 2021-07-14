

const initail = {
    usersCrudOperation: []
}
function usersCrudOperation(state = initail, action) {

    switch (action.type) {
        case 'SAVED':
            console.log("user usersCrudOperation ",action.payload);
            return {
                ...state,
                usersCrudOperation: [...state.usersCrudOperation, action.payload]
            }
        case 'REMOVE':
            return {
                ...state,
                usersCrudOperation: state.usersCrudOperation.filter((item, id) => item.id !== action.payload)
            }
           
             
        default:
            return state;

    }
}
export default usersCrudOperation;