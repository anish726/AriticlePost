


import {put, takeEvery} from 'redux-saga/effects'


function* homeUserArticle(article){
    yield put({type:'ADD_SAGA',article:article});

}
  function* watcherArticle(){
      yield takeEvery('ADD', homeUserArticle)
  }
   export default watcherArticle