import React,{Component} from 'react';
import {Table, Tabs, Divider} from 'antd';
import {Icon} from 'react-fa'
import '../News/TableStyle.less'
export default class NoticeTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource: []
        }
    }
    componentDidMount(){
        let dataSource = this.data.map((item, index) => {
            return {
                ...item,
                index: index + 1
            }
        })
        this.setState({dataSource})
    }
    render(){
        return(
            <Table
                columns={this.columns}
                rowKey='index'
                dataSource = {this.state.dataSource}
                bordered
            />
        )
    }
    columns = [{
        title: '序号',
        dataIndex: 'index',
        key: 'index'
    },{
        title: '公告标题',
        dataIndex: 'title',
        key:'title'
    },{
        title: '公告内容',
        // dataIndex: 'content',
        // key: 'content'
        render: (text, record, index) => (
            <div className="newsContent">{record.content}</div>
        )
    },{
        title: '重要程度',
        dataIndex: 'importance',
        key: 'importance'
    },{
        title: '时间',
        dataIndex: 'time',
        key:'time'
    }, {
        title: '操作',
        render:(text, record, index) => (
            <span>
                <a><Icon name='eye'/></a>
                <Divider type="vertical"/>
                <a><Icon name='edit'/></a>
                <Divider type="vertical"/>
                <a><Icon name='trash-o'/></a>
            </span>
        )
    }]
    data = [{
        title: '安全通知',
        content: '由于今日使用大功率用电器，导致宿舍停电等消息，危险',
        importance: '高',
        time: '2018-3-3'
    },{
        title: '用水通知',
        content: '为响应国家号召，宣布停水一晚',
        importance: '高',
        time: '2018-3-3'
    },{
        title: '用电通知',
        content: '为响应国家号召，宣布停电一晚',
        importance: '高',
        time: '2018-3-3'
    },{
        title: '用网通知',
        content: '为响应国家号召，宣布停网一晚',
        importance: '高',
        time: '2018-3-3'
    },{
        title: '领用通知',
        content: '为响应国家号召，宣布领取卫生工具',
        importance: '高',
        time: '2018-3-3'
    }]
}
