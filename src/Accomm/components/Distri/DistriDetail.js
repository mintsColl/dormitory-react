import React, {Component} from 'react';
import {Table, Divider, Popconfirm, Spin, Icon as Icon2, Notification} from 'antd';
import {Icon} from 'react-fa';
export default class DistriDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            spinStatus: true,
            dataSource: []
        }
    }
    async componentWillReceiveProps(nextProps){
        const {distriData = [], spinStatus = true, fresh = {fre: false, dor_no: ''}, actions: {is_fresh}} = nextProps;
        if (fresh.fre) {
            this.getData(fresh.dor_no)
            is_fresh({
                fre:false
            })
        }
        this.setState({spinStatus: spinStatus, dataSource: distriData});
    }
    edit(record){
        const {actions: {showDistriDor, saveEditData}} = this.props;
        showDistriDor({show: true, type: 'edit'});
        saveEditData(record);
    }
    async getData(dor_no){
        const {actions: {getDistri}} = this.props;
        this.setState({spinStatus: true});
        let rst = await getDistri({dor_no});
        this.setState({spinStatus: false, dataSource: rst});
    }
    async confirm(record){
        const {actions: {deleteDistri}} = this.props;
        let rst = await deleteDistri({stu_no:record.stu_no});
        if(rst[0].status === 'ok'){
            Notification.success({
                message: '删除成功'
            })
            this.getData(record.dor_no);
        }else{
            Notification.warning({
                message: '删除失败'
            })
        }
    }
    render(){
        const antIcon = <Icon2 type="loading" style={{ fontSize: 24 }} spin />
        return (
            <div style = {{"padding": '0 10px 0 165px'}}>
                <Spin indicator={antIcon} spinning = {this.state.spinStatus}>
                    <Table
                        columns = {this.columns}
                        bordered
                        dataSource = {this.state.dataSource}
                        rowKey = "stu_no"
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
        key: 'option',
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
