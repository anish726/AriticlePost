

const initialState= {
    userPostArticle:[]
}
  function userPostArticle(state=initialState,action){

    switch(action.type){
        case 'USER_POST_ARTICLE':
            return{
                ...state,
                userPostArticle:[...state.userPostArticle,action.payload]
            }
            default:
                return state
    }
  }

   export default userPostArticle;