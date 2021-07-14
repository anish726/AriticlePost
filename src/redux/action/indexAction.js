


function getArtical(artical){
    return{
        type:'GET_ARTICAL_REQUEST',
        artical
    }
}
export default getArtical;


export  function onAdd(article){
    return{
        type:'ADD',
         payload: article
    }
}

export function onEdit(data){
    console.log("in action",data);
    return{
        type:'UPDATE',
        payload:data
}
}