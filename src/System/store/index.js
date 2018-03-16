import {combineActions, handleActions} from 'redux-actions'
import {actionsMap} from '../../_platform/store/util'
import CreateDormitoryReducer, {actions as CreateDormitoryActions} from './CreateDormitory';
export default handleActions({
    [combineActions(...actionsMap(CreateDormitoryActions))]: (state = {}, action) => ({
        ...state,
        createDormitory: CreateDormitoryReducer(state.createDormitory, action)
    })
},{})
