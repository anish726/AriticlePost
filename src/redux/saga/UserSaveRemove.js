import {put, takeEvery} from 'redux-saga/effects';;
 
 function* save(user){
     yield put({type:'SAVE_SAGA', user:user})

 }

  function*  remove(id){
      yield put({type:'REMOVE_SAGA', id:id})
  }

  export  function* saveUser(){
      yield takeEvery('SAVED',save)
  }

  export function* removeUser(){
      yield takeEvery ('REMOVE', remove)
  }