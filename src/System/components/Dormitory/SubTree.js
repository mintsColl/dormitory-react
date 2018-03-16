import React, {Component} from 'react';
import {Tree, Row, Col, Button, Input, Notification} from 'antd';
import {Icon} from 'react-fa'
const {Search} = Input;
const {TreeNode} = Tree;
export default class SubTree extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: false,
            type: 'building'
        }
    }
    addDomitory(){

    }
    searchKeyword(){

    }
    select(node){
        let type = node[0].split('--')[2]
        this.setState({type})
    }
    loop(data){
        return data.map((item, index) => {
            if (item.children && item.children.length > 0) {
                return <TreeNode
                            title = {item.name}
                            key = {`${item.code}--${item.name}--${item.type}`}
                        >
                            {this.loop(item.children)}
                        </TreeNode>
            }
            return <TreeNode
                        title = {item.name}
                        key = {`${item.code}-${item.name}-${item.type}`}
                    />
        })
    }
    data = [{
        code: '01',
        name: '1号宿舍楼',
        type: 'building',
        children: [{
            code: '01#101',
            name: '1号楼101',
            type: 'door'
        },{
            code: '01#102',
            name: '1号楼102',
            type: 'door'
        },{
            code: '01#103',
            name: '1号楼103',
            type: 'door'
        },{
            code: '01#104',
            name: '1号楼104',
            type: 'door'
        },{
            code: '01#105',
            name: '1号楼105',
            type: 'door'
        },{
            code: '01#106',
            name: '1号楼106',
            type: 'door'
        },{
            code: '01#107',
            name: '1号楼107',
            type: 'door'
        },{
            code: '01#108',
            name: '1号楼108',
            type: 'door'
        },{
            code: '01#109',
            name: '1号楼109',
            type: 'door'
        },{
            code: '01#110',
            name: '1号楼110',
            type: 'door'
        },{
            code: '01#111',
            name: '1号楼111',
            type: 'door'
        },{
            code: '01#112',
            name: '1号楼112',
            type: 'door'
        },{
            code: '01#201',
            name: '1号楼201',
            type: 'door'
        },{
            code: '01#202',
            name: '1号楼202',
            type: 'door'
        },{
            code: '01#203',
            name: '1号楼203',
            type: 'door'
        },{
            code: '01#204',
            name: '1号楼204',
            type: 'door'
        },{
            code: '01#205',
            name: '1号楼205',
            type: 'door'
        },{
            code: '01#206',
            name: '1号楼206',
            type: 'door'
        },{
            code: '01#207',
            name: '1号楼207',
            type: 'door'
        },{
            code: '01#208',
            name: '1号楼208',
            type: 'door'
        },{
            code: '01#209',
            name: '1号楼209',
            type: 'door'
        },{
            code: '01#210',
            name: '1号楼210',
            type: 'door'
        },{
            code: '01#211',
            name: '1号楼211',
            type: 'door'
        }]
    },{
        code: '02',
        name: '2号宿舍楼',
        type: 'building'
    },{
        code: '03',
        name: '3号宿舍楼',
        type: 'building'
    },{
        code: '04',
        name: '4号宿舍楼',
        type: 'building'
    },{
        code: '05',
        name: '5号宿舍楼',
        type: 'building'
    },{
        code: '06',
        name: '6号宿舍楼',
        type: 'building'
    },{
        code: '07',
        name: '7号宿舍楼',
        type: 'building'
    },{
        code: '08',
        name: '8号宿舍楼',
        type: 'building'
    },{
        code: '09',
        name: '9号宿舍楼',
        type: 'building'
    },{
        code: '10',
        name: '10号宿舍楼',
        type: 'building'
    },{
        code: '11',
        name: '11号宿舍楼',
        type: 'building'
    },{
        code: '12',
        name: '12号宿舍楼',
        type: 'building'
    },{
        code: '13',
        name: '13号宿舍楼',
        type: 'building'
    },{
        code: '14',
        name: '14号宿舍楼',
        type: 'building'
    },{
        code: '15',
        name: '15号宿舍楼',
        type: 'building'
    },{
        code: '16',
        name: '16号宿舍楼',
        type: 'building'
    },{
        code: '17',
        name: '17号宿舍楼',
        type: 'building'
    }]
    addBuilding(){
        const {actions: {setCreateShow}} = this.props;
        setCreateShow({
            show: true,
            type: 'add'
        })
    }
    render(){
        return (
            <div>
                <Row>
					<Col span={24}>
						<div style={{borderBottom: 'solid 1px #999', paddingBottom: 5, marginBottom: 5}}>
                             {this.state.type === 'building' ?
                                 <Button onClick={this.addBuilding.bind(this)}>新建宿舍楼</Button> :
    							 <Button onClick={this.addDomitory.bind(this)}>新建宿舍号</Button>
                             }
						</div>
					</Col>
					{
                        this.state.search && <Col>
    						<Search
    							ref="keyword"
    							placeholder="请输入关键字"
    							onSearch={this.searchKeyword.bind(this)}
    						/>
    					</Col>
                    }
				</Row>
                <Tree
                    showLine
                    onSelect = {this.select.bind(this)}
                >
                    {this.loop(this.data)}
                </Tree>
            </div>
        )
    }
}
