import {handleActions, combineActions, createAction} from 'redux-actions'
const ID = '与接单有关的action'
const setAcceptShow = createAction(`${ID}是否显示接单弹框`);
const saveOrderData = createAction(`${ID}保存要接单的数据`)
export const actions = {
    setAcceptShow,
    saveOrderData
}

export default handleActions({
    [setAcceptShow]: (state, {payload}) => ({
        ...state,
        acceptShow: payload
    }),
    [saveOrderData]: (state, {payload}) => ({
        ...state,
        orderData: payload
    })
},{})
