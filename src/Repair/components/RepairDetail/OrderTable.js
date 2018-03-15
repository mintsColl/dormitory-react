import React, {Component} from 'react';
import {Table, Modal, Notification, Divider, Tabs} from 'antd';
import {Icon} from 'react-fa'
const TabPane = Tabs.TabPane
export default class OrderTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataSource: []
        }
    }
    render(){
        return(
            <Table
                bordered
                columns = {this.columns}
                dataSource = {this.state.dataSource}
                rowKey = 'code'
            />
        )
    }
    componentDidMount(){
        let dataSource = [{
            code: '01',
            content: '水龙头损坏',
            person: '李明阳',
            place: '1#303',
            tel: '18513117207',
            remark: '洗漱间'
        }]
        this.setState({dataSource})
    }
    // 接单函数
    acceptOrder(record){
        const {actions: {setAcceptShow, saveOrderData}} = this.props;
        setAcceptShow(true)
        saveOrderData([record])
    }
    columns = [{
        title: '报修单编号',
        dataIndex: 'code',
        key: 'code',
        width: '10%'
    },{
        title: '报修内容',
        dataIndex: 'content',
        key: 'content',
        width: '35%'
    },{
        title: '报修人',
        dataIndex: 'person',
        key: 'person'
    },{
        title: '地点',
        dataIndex: 'place',
        key: 'place'
    },{
        title: '联系方式',
        dataIndex: 'tel',
        key: 'tel'
    },{
        title: '备注',
        dataIndex: 'remark',
        key: 'remark',
        width: '15%'
    },{
        title: '操作',
        key: 'operation',
        render: (text, record, indx) => (
            <a onClick = {this.acceptOrder.bind(this, record)}>接单</a>
        )
    }]

}
