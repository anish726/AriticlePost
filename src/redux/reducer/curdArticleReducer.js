import { userPostArticle } from "../action/UserDetails";

const initail = {
    allArticlePost:[],
    
    }
   function allArticlePost(state=initail, action){
       switch(action.type){
           case'ADD':
           return{
               ...state,
               allArticlePost:[...state.allArticlePost,action.payload]
           }
          case 'UPDATE':
              const modifiedArticles = state.allArticlePost.filter((item)=>
                  item.id === action.payload.id ?Object.assign(item,action.payload):item);
              return{
                ...state,
                allArticlePost:[...modifiedArticles]
            }

            
             
      
            
           default:
           return state

       }
   }
   export default allArticlePost;