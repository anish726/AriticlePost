

 function userPostArticleSet(post){
    return{
        type:'USER_POST_ARTICLE_GET',
       post
    }
}
 export default userPostArticleSet

   export function userPostArticleDelete(id){
     return{
         type:'USER_POST_ARTICLE_DELETE',
         payload:id
     }
 }
