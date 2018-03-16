import React, {Component} from 'react';
import {Menu, Tooltip} from 'antd';
import {Icon} from 'react-fa';
import './Header.less';
import {Link} from 'react-router-dom';

export default class Header extends Component {
	render() {
		const {match: {params: {module = ''} = {}} = {}} = this.props;
		const ignore = Header.ignoreModules.some(m => m === module);
		if (ignore) {
			return null;
		}
		return (
			<header className="header">
				<a className="head-logo" href='/'>
					<div className="brand">
							宿舍管理系统
					</div>
				</a>
				<Menu className="nav-menu head-nav"
				      selectedKeys={this.selectKeys()}
				      mode="horizontal">
					{
						Header.menus.map(menu => {
								return (
									<Menu.Item
										key={menu.key}
										className="nav-item">
										<Link to={menu.path}>
											{menu.icon}
											<span className="title">{menu.title}</span>
										</Link>
									</Menu.Item>)
                            })
					}
				</Menu>
				<div className="head-right">
					<div className="head-info">
						<a className="user">李明阳</a>
						<Icon name="sign-out" title="退出登录" onClick={this.signOut.bind(this)}/>
					</div>
					{/* <div className="head-fn">
						<Link to='/selfcare'>
							<Icon name="tasks" title="个人任务"/>
						</Link>
						<Link to='/modeldown'>
							<Icon name="download" title="下载模型"/>
						</Link>
					</div> */}
				</div>
			</header>);
	}

	selectKeys() {
		const {match: {params: {module = ''} = {}} = {}} = this.props;
		const {key = ''} = Header.menus.find(menu => menu.path === `/${module}`) || {};
		return [key];
	}

	signOut() {
		const {history} = this.props;
		let remember = window.localStorage.getItem('QH_LOGIN_REMEMBER');
		if(!remember){
			window.localStorage.removeItem('QH_LOGIN_USER');
		}
		setTimeout(() => {
			history.replace('/');
		}, 500);
	}

	Download() {

	}

	static ignoreModules = ['login'];

	static menus = [{
		key: 'dashboard',
		id: 'DISPLAY',
		title: '综合展示',
		path: '/home',
		icon: <Icon name="map"/>
	}, {
		key: 'overall',
		id: 'MANAGE',
		title: '综合管理',
		path: '/overall',
		icon: <Icon name="cubes"/>,
	}, {
		key: 'repair',
		id: 'REPAIR',
		title: '报修和维修管理',
		path: '/repair',
		icon: <Icon name="wrench"/>
	}, {
		key: 'design',
		id: 'DESIGN',
		title: '学生住宿管理',
		path: '/design',
		icon: <Icon name="bed"/>,
	}, {
		key: 'quality',
		id: 'QUALITY',
		title: '宿管信息管理',
		path: '/quality',
		icon: <Icon name="users"/>
	}, {
		key: 'schedule',
		id: 'SCHEDULE',
		title: '费用管理',
		path: '/schedule',
		icon: <Icon name="cny"/>
	}, {
		key: 'cost',
		title: '留言管理',
		path: '/cost',
		icon: <Icon name="commenting"/>
	}, {
		key: 'lock',
		title: '门禁管理',
		id: 'LOCK',
		path: '/lock',
		icon: <Icon name="lock"/>
	}, {
		key: 'video',
		title: '工具管理',
		id: 'VIDEO',
		path: '/video',
		icon: <Icon name="gavel"/>
	},{
		key: 'setup',
		id: 'SETUP',
		title: '系统配置',
		path: '/system',
		icon: <Icon name="gear"/>
	}]
}
