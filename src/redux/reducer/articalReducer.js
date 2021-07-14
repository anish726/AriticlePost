

const initialState = {
    artical:[],
    loading: false,
    error:null
}
  
 function artical (state = initialState, action){

    switch(action.type){
        case 'GET_ARTICAL_REQUEST':
            return{
                ...state,
                loading:true
            }
        case 'GET_ARTICAL_SUCCESS':
            return{
                ...state,
                artical:action.posts,
                loading:false
            }
             case 'GET_ARTICAL_FAIL':
                 return{
                     ...state,
                     loading:false,
                     error:action.message
                 }
                 default:
                     return state;

    }

 }
  export default artical;