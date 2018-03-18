import React, {Component} from 'react';
// 将redux中的值取出放到组件里面
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions as platformActions} from '../../_platform/store/global';
import {DynamicTitle} from '../../_platform/layout/DynamicTitle';
import {Sidebar} from '../../_platform/layout/SideBar';
import {actions} from '../store/DorAdmin'
import {TableAdmin, CreateAdmin, CreateAdminBatch, DeleteAdminBatch} from '../components/DorAdmin';
@connect(
    state => {
        const {system: {dorAdmin = {}}} = state;
        return {...dorAdmin}
    },
    dispatch => ({
        actions: bindActionCreators({...platformActions,...actions}, dispatch)
    })
)
export default class DorAdmin extends Component{
    render(){
        return (
            <div style={{overflow: 'hidden', padding: '20px', 'position':'relative'}}>
                <DynamicTitle title= '宿管信息' {...this.props} />
                <TableAdmin {...this.props} />
                <CreateAdmin {...this.props} />
                <CreateAdminBatch {...this.props} />
                <DeleteAdminBatch {...this.props} />
            </div>
        )
    }
}
