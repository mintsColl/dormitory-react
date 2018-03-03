import { createAction, handleActions, combineActions } from 'redux-actions';

const ID = "新闻管理相关action";
const setNewsShow = createAction(`${ID}新闻发布页面是否显示`);
export const actions = {
    setNewsShow
}
export default handleActions({
    [setNewsShow]: (state, {payload}) => ({
        ...state,
        news_visible: payload
    })
},{})
