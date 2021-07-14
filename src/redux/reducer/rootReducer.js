import {combineReducers} from 'redux';
import artical from './articalReducer';
import allArticlePost from './curdArticleReducer';
import usersCrudOperation from './UserSave'
import userDetails from './UserDetails'
import  userPostArticle  from './UserDetails'
import userPostArticleSet from './userPostArticleGet'


 const rootReducer = combineReducers({
    artical:artical,
    allArticlePost:allArticlePost,
    usersCrudOperation:usersCrudOperation,
 userDetails:userDetails,
 userPostArticle:userPostArticle,
 userPostArticleSet:userPostArticleSet
 })
  export default rootReducer