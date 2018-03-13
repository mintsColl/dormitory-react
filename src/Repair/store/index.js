import {combineActions, handleActions} from 'redux-actions';
import {actionsMap} from '../../_platform/store/util';

import WriteOrderReducer, {actions as WriteOrderActions} from './WriteOrder'
// 导出reducer
export default handleActions({
    [combineActions(...actionsMap(WriteOrderActions))]: (state = {}, action) => ({
        ...state,
        writeOrder: WriteOrderReducer(state.writeOrder, action)
    }),
},{})
