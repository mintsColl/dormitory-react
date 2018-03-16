import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actions as platformActions} from '../../_platform/store/global';
import {DynamicTitle} from '../../_platform/layout/DynamicTitle';
import {Sidebar} from '../../_platform/layout/SideBar'
import {actions} from '../store/CreateDormitory'
import {SubTree, CreateDormitory} from '../components/Dormitory'
@connect(
    state => {
        const {system: {createDormitory = {}}} = state;
        return {...createDormitory}
    },
    dispatch => ({
        actions: bindActionCreators({...platformActions, ...actions}, dispatch)
    })
)
export default class Dormitory extends Component{
    render(){
        return (
            <div style={{overflow: 'hidden', 'position':'relative'}}>
                <DynamicTitle title="宿舍信息" {...this.props}/>
                <Sidebar>
                    <SubTree {...this.props} />
                </Sidebar>
                <CreateDormitory {...this.props} />
            </div>
        )
    }
}
