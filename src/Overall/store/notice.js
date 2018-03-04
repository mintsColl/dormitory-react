import {createAction, combineActions, handleActions} from 'redux-actions';
const ID = `公告相关action`;
const setNoticeShow = createAction(`创建公告弹框是否显示`);

export const actions = {
    setNoticeShow
}
export default handleActions({
    [setNoticeShow]: (state, {payload}) => ({
        ...state,
        notice_visible: payload
    })
},{})
