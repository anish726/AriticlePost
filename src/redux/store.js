import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducer/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga'


const sagaMiddleware= createSagaMiddleware();

const store =compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

(createStore)(rootReducer)


sagaMiddleware.run(rootSaga)

export default store;