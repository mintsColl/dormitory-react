import React, {Component} from 'react';
import {Table, Modal, Notification} from 'antd';
export default class OrderTable extends Component{
    render(){
        constructor(props){
            super(props)
            this.state = {

            }
        }
        return(
            <Table
                bordered
                columns = {this.columns}
            />
        )
    }
    columns = [{
        title: '报修单编号',
        dataIndex: 'code'
        key: 'code'
    },{
        title: '报修内容',
        dataIndex: 'content',
        key: 'content'
    },{
        title: '报修地点'
    }]
}
