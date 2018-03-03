import {createAction, handleActions, combineActions} from 'redux-actions';
import createFetchAction from './fetchAction';
import {LOGIN_API} from '../../_platform/api';
import {actionsMap} from '../../_platform/store/util'
// 是个方法，里面封装的是payload构造器
import fieldFactory from '../../_platform/store/field'
const ID = "LOGIN_USER";
const getLogin = createFetchAction(`${LOGIN_API}/index.php/?user_name={{user_name}}&user_pass={{user_pass}}`, [], 'GET')
const fieldReducer = fieldFactory(ID, 'addition');
export const actions = {
    ...fieldReducer,
    getLogin
}
export default handleActions({
	[combineActions(...actionsMap(fieldReducer))]: (state, action) => ({
		...state,
		userInfo: fieldReducer(state.userInfo, action),
	}),
}, {});