import React, {Component} from 'react';
import {connect} from 'react-redux';
import {News} from '../components/News'
import {Students} from '../components/Students'
import {Row, Col} from 'antd';
export default class Home extends Component{
    render(){
        return (
            <div>
                <Row gutter={10} style={{margin: '5px, 5px ,5px ,5px'}}>
                    <Col span={11}>
                        <News />
                    </Col>
                    <Col span={11}>
                        <Students />
                    </Col>
                </Row>
            </div>
        )
    }
}
