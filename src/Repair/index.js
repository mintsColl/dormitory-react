import React, {Component} from 'react'
import {injectReducer} from '../store'
import {Submenu} from '../_platform/panels/Submenu'
import {Aside} from '../_platform/layout/Aside'
import {Body} from '../_platform/layout/Body'
import {Main} from '../_platform/layout/Main'
import {ContainerRouters} from '../_platform/panels/ContainerRouters'
import {Icon} from 'react-fa';
import {actions as platformActions} from '../_platform/store/global'
export default class Repair extends Component{
    async componentDidMount(){
        // const {default: reducer} = await import('./store');
        const Containers = await import('./containers');
        console.log("Containers:",Containers);
        // 要把注册reducer放到渲染组件之前
        // injectReducer('repair', reducer)
        this.setState({...Containers});
    }
    render() {
        console.log(this.state);
		return (
			<Body>
    			<Aside>
    				<Submenu {...this.props} menus={Repair.menus} defaultOpenKeys={Repair.defaultOpenKeys}/>
    			</Aside>
    			<Main>
    				<ContainerRouters {...this.props} menus={Repair.menus} containers={this.state}/>
    			</Main>
			</Body>
            );
	}
    static menus = [{
        key: 'fix',
        id: 'fix',
        name: '报修管理',
        exact: true,
        icon: <Icon name="calendar-check-o"/>,
        children: [{
            key: 'WriteOrder',
            id: 'WriteOrder',
            name: '填写维修单',
            path: '/repair',
            icon: <Icon name="pencil" />,
            exact: true
        },{
            key: 'RepairProgress',
            id: 'RepairProgress',
            name: '报修进度',
            path: '/repair/progress',
            icon: <Icon name="level-up" />,
            exact: true
        }]
    },{
        key: 'repair',
        id: 'repair',
        name: '维修管理',
        exact: true,
        icon: <Icon name="calendar-check-o"/>,
        children: [{
            key: 'RepairSchedule',
            id: 'RepairSchedule',
            name: '维修进度',
            path: '/repair/schedule',
            icon: <Icon name="level-up" />,
            exact: true
        },{
            key: 'RepairEvalute',
            id: 'RepairEvalute',
            name: '维修评价',
            path: '/repair/evalute',
            icon: <Icon name="pencil-square" />,
            exact: true
        },{
            key: 'RepairDetail',
            id: 'RepairDetail',
            name: '维修查看',
            path: '/repair/detail',
            icon: <Icon name="tasks" />,
            exact: true
        }]
    }]
    static defaultOpenKeys = ['repair', 'fix']
}
