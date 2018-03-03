import React,{Component} from 'react';
import {Table, Pagination, Card, Modal} from 'antd';
import './News.less'
export class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            newsContent: ''
        }
    }
    render(){
        return(
            <Card
                title = '最近新闻'
            >
                <Table
                    dataSource = {this.dataSource}
                    columns = {this.columns}
                    bordered
                    pagination = {false}
                />
                <Pagination style={{float:"right"}} size="small" total='20'/>
                <Modal
                    title = "新闻详情"
                    visible = {this.state.visible}
                    width = "50%"
                    footer = {null}
                    onCancel = {() => {
                        this.setState({visible: false})
                    }}
                >
                {this.state.newsContent}
                </Modal>
            </Card>
        )
    }
    dataSource = [{
        title:'中国反坦克导弹研发晚于美国20年 一型号比美轻10斤',
        time: '2017-2-28',
        newsContent: '具体新闻1'
    },{
        title:'中国反坦克导弹研发晚于美国20年 一型号比美轻10斤',
        time: '2017-2-28',
        newsContent: '具体新闻2'
    },{
        title:'中国反坦克导弹研发晚于美国20年 一型号比美轻10斤',
        time: '2017-2-28',
        newsContent: '具体新闻3'
    },{
        title:'中国反坦克导弹研发晚于美国20年 一型号比美轻10斤',
        time: '2017-2-28',
        newsContent: '具体新闻4'
    },{
        title:'中国反坦克导弹研发晚于美国20年 一型号比美轻10斤',
        time: '2017-2-28',
        newsContent: '具体新闻5'
    }];
    columns = [{
        title:'标题',
        dataIndex: 'title',
        key:'title'
    },{
        title: '发布时间',
        dataIndex: 'time',
        key: 'time'
    },{
        title: '操作',
        render: (record) => (
            <a onClick={(e) => {
                this.setState({
                    newsContent: record.newsContent,
                    visible: true
                })
            }}>查看</a>
        )
    }]
}
