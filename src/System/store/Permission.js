import {createAction, handleActions} from 'redux-actions';
import createFetchAction from './fetchAction';
import {SERVICE_API} from '../../_platform/api';
const ID = '与权限有关的actions';
const setPermission = createFetchAction(`${SERVICE_API}/permission/index.php`, [], "POST");
const saveFlag = createAction(`${ID}保存点击的类型`);
const savePermission = createAction(`${ID}保存权限`);
const getPermission = createFetchAction(`${SERVICE_API}/permission/getData.php?perm_name={{perm_name}}`, [], "GET");
export const actions = {
    setPermission,
    saveFlag,
    getPermission,
    savePermission
}
export default handleActions({
    [saveFlag]: (state, {payload}) => ({
        ...state,
        flag: payload
    }),
    [savePermission]: (state, {payload}) => ({
        ...state,
        permission: payload
    })
},{})
