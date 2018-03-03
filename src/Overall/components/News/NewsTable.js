import React, {Component} from 'react';
import {Table, Divider} from 'antd';
import {Icon} from 'react-fa'
export default class NewsTable extends Component{
    render(){
        return (
            <Table
                columns = {NewsTable.columns}
                dataSource = {NewsTable.dataSource}
                bordered
            />
        )
    }
    static dataSource = [{
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
    static columns = [{
        dataIndex: 'title',
        key: 'title',
        title: '标题'
    }, {
        dataIndex: 'time',
        key: 'time',
        title: '发布时间'
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
}
