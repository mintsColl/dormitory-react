import React, {Component} from 'react';
import {Table, Divider, Popconfirm, Spin} from 'antd';
import {Icon} from 'react-fa';
export default class DistriDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            spin: false,
            dataSource: []
        }
    }
    async componentWillReceiveProps(nextProps){
        this.setState({spin: true});
        const {actions: {getDistri}, selectNode = []} = nextProps;
        let dor_no = selectNode[0].split('--')[1];
        let rst = await getDistri({dor_no});
        this.setState({spin: false});
        this.setState({dataSource: rst});
    }
    edit(){

    }
    async confirm(record){
        const {acions: {deleteDistri}} = this.props;
        let rst = await deleteDistri({dor_no:record.dor_no});
        if(rst[0].status === 'ok'){
            Notification.success({
                message: '删除成功'
            })
        }else{
            Notification.warning({
                message: '删除失败'
            })
        }
    }
    render(){
        return (
            <div style = {{"padding": '0 10px 0 165px'}}>
                <Spin spinning = {this.state.spin}>
                    <Table
                        columns = {this.columns}
                        bordered
                        dataSource = {this.state.dataSource}
                    />
                </Spin>
            </div>
        )
    }
    columns = [{
        title: '序号',
        render: (text, record, index) => {
            record.index = index;
            return (<span>{index + 1}</span>)
        }
    },{
        title: '宿舍名称',
        dataIndex: 'dor_no',
        key: 'dor_no'
    },{
        title: '学生',
        dataIndex: 'stu_no',
        key: 'stu_no'
    },{
        title: '操作',
        render: (text, record, index) => {
            return (
                <div>
                    <a onClick = {this.edit.bind(this, record)}><Icon name='edit' /></a>
                    <Divider type='vertical' />
                    <Popconfirm title="确定删除吗？" onConfirm={this.confirm.bind(this, record)} okText="是" cancelText="否">
                        <a><Icon name='trash'/></a>
                    </Popconfirm>
                </div>
            )
        }
    }]
}
