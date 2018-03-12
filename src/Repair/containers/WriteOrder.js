import React, {Component} from 'react';
import {Aside} from '../../_platform/layout/Aside';
import {Body} from '../../_platform/layout/Body';
import {DynamicTitle} from '../../_platform/layout/DynamicTitle'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {actions as platformActions} from '../../_platform/store/global';
import {Table, Col, Row} from 'antd'
@connect(
    state => {
        return {...state}
    },
    dispatch => ({
        actions: bindActionCreators({...platformActions}, dispatch)
    })
)
export class WriteOrder extends Component{
    render(){
        return (
            <div style={{overflow: 'hidden', padding: 20, 'position':'relative'}}>
                <DynamicTitle title="填写报修单" {...this.props}/>
                <Table

                 />
            </div>
        )
    }
    columns = [{
        title: '报修单编号',
        dataIndex: 'repairNo',
        key: 'repairNo'
    },{
        title: '报修内容',
        dataIndex: 'repairContent',
        key: 'repairContent'
    },{
        title: ''
    }]
}
