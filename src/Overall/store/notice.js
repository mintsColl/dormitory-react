import {createAction, combineActions, handleActions} from 'redux-actions';
const ID = `公告相关action`;
const setNoticeShow = createAction(`创建公告弹框是否显示`);
const setNoticeDetail = createAction(`${ID}公告详情页面是否显示`);
const setNoticeContent = createAction(`${ID}公告详情`);
const setNoticeData = createAction(`${ID}公告数据`)
export const actions = {
    setNoticeShow,
    setNoticeDetail,
    setNoticeContent,
    setNoticeData
}
export default handleActions({
    [setNoticeShow]: (state, {payload}) => ({
        ...state,
        notice_visible: payload
    }),
    [setNoticeContent]: (state, {payload}) => ({
        ...state,
        notice_content: payload
    }),
    [setNoticeDetail]: (state, {payload}) => ({
        ...state,
        notice_detail: payload
    }),
    [setNoticeData]: (state, {payload}) => ({
        ...state,
        notice_data: payload
    })
},{})
