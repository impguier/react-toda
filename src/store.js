//引入一个数据源
import { createStore } from 'redux'
import rootReducer from './reducer/index'
import events from './data/event';
//设置一个默认的数据结构
const defaultState = {
    events:events
};
//创建一个Store实例(reducer,defaultState)
const store = createStore(rootReducer,defaultState);
export default store;