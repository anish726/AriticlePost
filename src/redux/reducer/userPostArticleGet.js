


const initailState = {
    userPostArticleGet: []
}


function userPostArticleGetSet(state = initailState, action) {

    switch (action.type) {
        case 'USER_POST_ARTICLE_GET':
            return {
                ...state,
                userPostArticleGet: [...state.userPostArticleGet, action.post]
            }
               case 'USER_POST_ARTICLE_DELETE':
                   return{
                       ...state,
                       userPostArticleGet:[...state.userPostArticleGet.filter(item => item.id !== action.payload )]
                       
                   }
        default:
            return state
    }
}
export default userPostArticleGetSet;