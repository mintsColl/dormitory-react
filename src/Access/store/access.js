import {createAction, handleActions} from 'redux-actions';
import createFetchAction from './fetchAction';
import {SERVICE_API} from '../../_platform/api';
const ID = `与门禁管理有关的action`;
const postData = createFetchAction(`${SERVICE_API}/access/index.php`, [], 'POST');
export const actions = {
    postData
}
