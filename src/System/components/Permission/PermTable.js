import React, {Component} from 'react';
import {Table, Switch, Button, Notification} from 'antd';
import {MODULES} from '../../../_platform/api';
import './table.less';
import flattenDeep from 'lodash/flattenDeep';
import {getCookie} from '../../../_platform/cookie';
export default class PermTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            treeData: [],
            edit: false
        }
    }
    componentDidMount(){

    }
    change(record, checked){
        record['checked'] = checked;
        this.forceUpdate();
    }
    edit(){
        this.setState({edit: true});
    }
    async finish(){
        const {actions: {setPermission}, flag = 'dor'} = this.props;
        let keys = flattenDeep(this.loop(MODULES));
        // 将所有有子级关系的素组元素,变为同一级
        let new_keys = [];
        for (let i = 0; i < keys.length; i++) {
            if (keys[i]) {
                new_keys.push(keys[i])
            }
        }
        let login_info = JSON.parse(getCookie('login'));
        let data = {
            perm_name: flag,
            perm_value: JSON.stringify(new_keys)
        }
        let rst = await setPermission({}, data)
        if (rst[0].status === 'ok') {
            Notification.success({
                message: '配置成功'
            })
            this.setState({edit: false});
        }else{
            Notification.warning({
                message: '配置失败'
            })
        }
    }
    loop(data){
        return data.map((item, index) => {
            if (item.children && item.children.length > 0) {
                if (item.checked) {
                    return [item.key,...this.loop(item.children)];
                }else{
                    return false;
                }
            }else{
                if (item.checked) {
                    return [item.key];
                }else{
                    return false;
                }
            }
        })
    }
    render(){
        return (
            <div style = {{position: 'relative', paddingTop: '20px'}}>
                {this.state.edit ? <Button type="primary" className = "button" onClick = {this.finish.bind(this)}>完成</Button> : <Button type="primary" className = "button" onClick = {this.edit.bind(this)}>编辑</Button>}
                <Table
                    className = 'table'
                    bordered
                    columns = {this.columns}
                    dataSource = {MODULES}
                    rowKey = 'module'
                />
            </div>
        )
    }
    columns = [{
        title: '模块',
        width: '20%',
        dataIndex: 'module',
        key: 'module'
    },{
        title: '开/关',
        width: '20%',
        render: (text, record, index) => {
            return <Switch disabled = {!this.state.edit} checked = {record.checked} checkedChildren="开" unCheckedChildren="关" onChange = {this.change.bind(this, record)}/>
        }
    }]

}
