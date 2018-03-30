import React, {Component} from 'react';
import {Tree} from 'antd';
const {TreeNode} = Tree;
export default class PermTree extends Component{
    constructor(props){
        super(props);
        this.state = {
            treeData: []
        }
    }
    componentDidMount(){
        const tree = [{
            title: '宿管人员',
            key: 'dor'
        },{
            title: '学生',
            key: 'stu'
        },{
            title: '维修人员',
            key: 'rep'
        }];
        let treeData = this.generateTreeData(tree);
        this.setState({treeData});
    }
    generateTreeData(data){
        return data.map((item, index) => {
            return <TreeNode
                title = {item.title}
                key = {item.key}
            />
        })
    }
    async select(node){
        const {actions: {saveFlag, getPermission, savePermission}} = this.props;
        saveFlag(node[0]);
        let rst = await getPermission({perm_name: node[0]})
        let permission = JSON.parse(rst[0].perm_value);
        savePermission(permission);
    }
    render(){
        return (
            <Tree
                showLine
                onSelect = {this.select.bind(this)}
                defaultSelectedKeys = {['dor']}
            >
                {this.state.treeData}
            </Tree>
        )
    }
}
