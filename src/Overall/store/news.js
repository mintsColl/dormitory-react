import { createAction, handleActions, combineActions } from 'redux-actions';

const ID = "新闻管理相关action";
const setNewsShow = createAction(`${ID}新闻发布页面是否显示`);
const setNewsContent = createAction(`${ID}新闻详情`);
const setNewsDetail = createAction(`${ID}新闻详情页面是否显示`);
const setOpertion = createAction(`${ID}判断是编辑还是新增`)
const setEditData = createAction(`${ID}存储编辑的信息`)
export const actions = {
    setNewsShow,
    setNewsContent,
    setNewsDetail,
    setOpertion,
    setEditData
}
export default handleActions({
    [setNewsShow]: (state, {payload}) => ({
        ...state,
        news_visible: payload
    }),
    [setNewsContent]: (state, {payload}) => ({
        ...state,
        news_content: payload
    }),
    [setNewsDetail]: (state, {payload}) => ({
        ...state,
        news_detail: payload
    }),
    [setOpertion]: (state, {payload}) => ({
        ...state,
        opertion: payload
    }),
    [setEditData]: (state, {payload}) => ({
        ...state,
        editData: payload
    })
},{})
