import React, {Component} from 'react';
import {Table, Notification, Button, Divider} from 'antd';
import {Icon} from 'react-fa';
export default class TableVisit extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource: []
        }
    }
    render(){
        return (
            <Table
                columns = {this.columns}
                dataSource = {this.state.dataSource}
                bordered
                rowKey = 'visit_name'
            />
        )
    }
    columns = [{
        title: '来访人姓名',
        dataIndex: 'visit_name',
        key: 'visit_name'
    },{
        title: '访问人',
        dataIndex: 'visit_person',
        key: 'visit_person'
    },{
        title: '与被访者关系',
        dataIndex: 'visit_rela',
        key: 'visit_rela'
    },{
        title: '访问活动',
        dataIndex: 'visit_acti',
        key: 'visit_acti'
    },{
        title: '访问时间',
        dataIndex: 'visit_entry',
        key:'visit_entry'
    },{
        title: '预计离开时间',
        dataIndex: 'visit_leave',
        key: 'visit_leave'
    },{
        title: '操作',
        render: (text, record, index) => {
            return (
                <div>
                    <Icon name = 'edit'/>
                    <Divider type = 'vertical' />
                    <Icon name = 'trash'/>
                </div>
            )
        }
    }]
}
