import {put, takeEvery} from 'redux-saga/effects';



function* userLogin(userDetails){
    yield put({type:'USER_DETAILS_SAGA',userDetails:userDetails})
}

function* watcherLogin  (){
    yield takeEvery('USER_DETAILS',userLogin);
}
 export default watcherLogin;