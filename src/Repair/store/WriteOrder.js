import {createAction, handleActions, combineActions} from 'redux-actions'
const ID = '与报修单管理相关的action'

const setOrderEdit = createAction(`${ID}编辑报修单`);
const setWriteShow = createAction(`${ID}填写报修单显示`)
const setEditData = createAction(`${ID}存储变更的数据`)
export const actions = {
    setOrderEdit,
    setWriteShow,
    setEditData
}
export default handleActions({
    [setOrderEdit]: (state, {payload}) => ({
        ...state,
        editData: payload
    }),
    [setWriteShow]: (state, {payload}) => ({
        ...state,
        showOrder: payload
    }),
    [setEditData]: (state, {payload}) => ({
        ...state,
        editData: payload
    })
},{})
