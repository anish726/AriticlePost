import {all} from 'redux-saga/effects';
import sagaFetchRender from './AllArticalSaga';
import watcherArticle from './Home.Saga';
import watcherLogin from './userSaga';
import { saveUser, removeUser } from './UserSaveRemove';

function* rootSaga(){
    console.log("hey iam here")
    yield all([sagaFetchRender(), watcherArticle(),watcherLogin(),
    saveUser(),removeUser()])
}
export default rootSaga