import {handleActions, combineActions} from 'redux-actions';
import {actionsMap} from '../../_platform/store/util';
// 导入新闻界面的store
import newsReducer, {actions as newsActions} from './news'
export default handleActions({
    [combineActions(...actionsMap(newsActions))]: (state = {}, action) => ({
        ...state,
        news: newsReducer(state.news, action)
    })
},{})
