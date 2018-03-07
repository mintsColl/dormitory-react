import React, {Component} from 'react';
import {Aside} from '../../_platform/layout/Aside';
import {Body} from '../../_platform/layout/Body';
import {DynamicTitle} from '../../_platform/layout/DynamicTitle'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {actions as platformActions} from '../../_platform/store/global';
@connect(
    state => {
        return {...state}
    },
    dispatch => ({
        actions: bindActionCreators({...platformActions}, dispatch)
    })
)
export class RepairSchedule extends Component{
    render(){
        return (
            <div style={{overflow: 'hidden', padding: 20, 'position':'relative'}}>
                <DynamicTitle title="维修进度" {...this.props}/>
            </div>
        )
    }
}
