import React, {Component} from 'react';
import {Aside} from '../../_platform/layout/Aside';
import {Body} from '../../_platform/layout/Body';
import {DynamicTitle} from '../../_platform/layout/DynamicTitle'
import {Sidebar} from '../../_platform/layout/SideBar'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {actions as platformActions} from '../../_platform/store/global';
import {Tabs, Button} from 'antd';
import {TableVisit, CreateVisit} from '../components/Visit';
import {actions} from '../store/access';
import './Tab.less';
const TabPane = Tabs.TabPane;
@connect(
    state => {
        return {...state}
    },
    dispatch => ({
        actions: bindActionCreators({...platformActions, ...actions}, dispatch)
    })
)
export default class Visit extends Component{
    render(){
        return (
            <div style={{overflow: 'hidden', position: 'relative', padding: 20}}>
                <DynamicTitle {...this.props} title = '来访人登记' />
                <Button className='sendNews' type="primary" onClick={() => {

                }}>新建登记</Button>
				<Tabs>
					<TabPane tab="登记列表" key="1">
						<TableVisit {...this.props}/>
					</TabPane>
                    <CreateVisit {...this.props} />
				</Tabs>
            </div>
        )
    }
}
