

import {put,call,takeEvery } from 'redux-saga/effects';
const URL=`https://jsonplaceholder.typicode.com/posts`;


function fetchArtical(){
    return  fetch(URL,{
        method:"GET"
    })
    .then(response => response.json())
    .catch((error) => {throw error
    })
}
  

function* fetchGetApi(){
    try {
        const posts = yield call(fetchArtical);
    
         yield put({type:'GET_ARTICAL_SUCCESS', posts:posts})

        
    } catch (e) {
        yield put({type:'GET_ARTICAL_FAIL', message:e.message})
        
    }
}
  function* sagaFetchRender(){
      yield takeEvery('GET_ARTICAL_REQUEST',fetchGetApi)
  }
   export default sagaFetchRender;