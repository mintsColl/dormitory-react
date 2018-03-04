import React,{Component} from 'react';
import {Aside} from '../../_platform/layout/Aside';
import {Body} from '../../_platform/layout/Body';
import {DynamicTitle} from '../../_platform/layout/DynamicTitle'
import {connect} from 'react-redux';
import {Tabs, Button} from 'antd'
import {NoticeTable} from '../components/Notice'
import {bindActionCreators} from 'redux'
import {actions as platformActions} from '../../_platform/store/global';
import {actions} from '../store/notice'
import './Tab.less'
const TabPane = Tabs.TabPane;
@connect(
    state => {
        const {overall:{notice = {}}} = state;
        return {...notice}
    },
    dispatch => ({
        actions: bindActionCreators({...platformActions,...actions}, dispatch)
    })
)
export default class Notice extends Component{
    render(){
        return (
            <div style={{overflow: 'hidden', padding: 20, 'position':'relative'}}>
				<DynamicTitle title="公告管理" {...this.props}/>
                <Button className='sendNews' type="primary" onClick={() => {
                    const {actions:{setNoticeShow}} = this.props
                    setNoticeShow(true)
                }}>发布公告</Button>
				<Tabs>
					<TabPane tab="公告列表" key="1">
						<NoticeTable {...this.props}/>
					</TabPane>
				</Tabs>
                {/* {news_visible && <NewsModal {...this.props} {...this.state}/>} */}
			</div>
        )
    }
}
