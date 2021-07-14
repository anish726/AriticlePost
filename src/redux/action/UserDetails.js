

 function onUserDetails(details){
    return{
        type:'USER_DETAILS',
        payload:details

    }
}
export default onUserDetails;
  
export function onSave(user){
    return{
        type:'SAVED',
        payload:user
    }
}


 export function onDelete(id){
     return{
         type:'REMOVE',
         payload:id
     }
 }

 