import {handleActions, createAction} from 'redux-actions'
const ID = `与创建宿舍有关的action`;
const setCreateShow = createAction(`${ID}是否显示创建界面`);
export const actions = {
    setCreateShow
}
export default handleActions({
    [setCreateShow]: (state, {payload}) => ({
        ...state,
        createShow: payload
    })
},{})
