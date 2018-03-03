import React,{Component} from 'react';
import {Aside} from '../../_platform/layout/Aside';
import {Body} from '../../_platform/layout/Body';
import {DynamicTitle} from '../../_platform/layout/DynamicTitle'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {actions as platformActions} from '../../_platform/store/global';
@connect(
    state => {
        return {state}
    },
    dispatch => ({
        actions: bindActionCreators({...platformActions}, dispatch)
    })
)
export default class Notice extends Component{
    render(){
        return (
            <div>
                <DynamicTitle title = '公告管理' {...this.props}/>
                <div>
                    22222222222222222
                </div>
            </div>
        )
    }
}
