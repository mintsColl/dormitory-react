import React, {Component} from 'react';
import {Table, Divider} from 'antd';
import {Icon} from 'react-fa'
import './TableStyle.less'
export default class NewsTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource: []
        }
    }
    componentDidMount(){
        let data = NewsTable.dataSource.map((item, index) => {
            return {
                ...item,
                index: index + 1
            }
        })
        this.setState({dataSource: data})
    }
    detail(newsContent){
        const {actions: {setNewsContent, setNewsDetail}} = this.props;
        setNewsContent(newsContent)
        setNewsDetail(true)
    }
    edit(record){
        const {actions:{setEditData, setNewsShow}} = this.props;
        setEditData(record);
        setNewsShow({
            show:true,
            type:'edit'
        })
    }
    render(){
        return (
            <Table
                columns = {this.columns}
                dataSource = {this.state.dataSource}
                bordered
            />
        )
    }
    static dataSource = [{
        title:'新闻一',
        time: '2017-2-28',
        newsContent: '具体新闻1'
    },{
        title:'新闻二',
        time: '2017-2-28',
        newsContent: '具体新闻2'
    },{
        title:'新闻三',
        time: '2017-2-28',
        newsContent: '具体新闻3'
    },{
        title:'新闻四',
        time: '2017-2-28',
        newsContent: '新华社北京3月3日电　凝心聚力携手新时代，继往开来创造新辉煌。经历光荣岁月、坚持团结和民主两大主题的人民政协，又迎来一个重要的历史时刻：中国人民政治协商会议第十三届全国委员会第一次会议3日下午在人民大会堂开幕。政协第十二届全国委员会常务委员会向大会作的工作报告提出：中共十九大描绘了决胜全面建成小康社会、夺取新时代中国特色社会主义伟大胜利的宏伟蓝图，进一步指明了党和国家事业的前进方向。人民政协要把学习贯彻中共十九大精神作为重大政治任务，把习近平新时代中国特色社会主义思想作为统揽政协工作的总纲，把坚持和发展中国特色社会主义作巩固共同思想政治基础的主轴，把为决胜全面建成小康社会、夺取新时代中国特色社会主义伟大胜利献计出力作为工作主线，坚持稳中求进工作总基调，坚持新发展理念，坚持以人民为中心的发展思想，坚持团结和民主两大主题，围绕统筹推进“五位一体”总体布局、协调推进“四个全面”战略布局，认真履行政治协商、民主监督、参政议政职能，为全面建成小康社会、全面建设社会主义现代化国家作出新的贡献。三月北京，春意渐浓。人民大会堂万人大礼堂内穹顶璀璨，气氛庄重热烈。中国人民政治协商会议会徽悬挂在主席台正中，十面鲜艳的红旗分列两侧'
    },{
        title:'新闻四五',
        time: '2017-2-28',
        newsContent: '具体新闻5'
    }];
    columns = [{
        title: '序号',
        dataIndex: 'index',
        width: '7%',
        key: 'index'
    },{
        dataIndex: 'title',
        key: 'title',
        title: '标题',
        width: '10%',
    }, {
        title: '新闻内容',
        width: '40%',
        render: (text, record, index) => (
            <div className='newsContent'>{record.newsContent}</div>
        )
    },{
        dataIndex: 'time',
        key: 'time',
        title: '发布时间'
    }, {
        title: '操作',
        key: 'opertion',
        render:(text, record, index) => {
            console.log(this);
            return (
                <div>
                    <a><Icon onClick={this.detail.bind(this, record.newsContent)} name='eye'/></a>
                    <Divider type="vertical"/>
                    <a><Icon onClick={this.edit.bind(this, record)} name='edit'/></a>
                    <Divider type="vertical"/>
                    <a><Icon name='trash-o'/></a>
                </div>
            )
        }
    }]

}
