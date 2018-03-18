import {combineActions, handleActions} from 'redux-actions'
import {actionsMap} from '../../_platform/store/util'
import CreateDormitoryReducer, {actions as CreateDormitoryActions} from './CreateDormitory';
import DorAdminReducer, {actions as DorAdminActions} from './DorAdmin';
export default handleActions({
    [combineActions(...actionsMap(CreateDormitoryActions))]: (state = {}, action) => ({
        ...state,
        createDormitory: CreateDormitoryReducer(state.createDormitory, action)
    }),
    [combineActions(...actionsMap(DorAdminActions))]: (state = {}, action) => ({
        ...state,
        dorAdmin: DorAdminReducer(state.dorAdmin, action)
    })
},{})
