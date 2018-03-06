import React, {Component} from 'react';
import {Modal, Select, Col, Row, Form, Button, Input} from 'antd';
import E from 'wangeditor'
const {Option} = Select;
const FormItem = Form.Item;
let editor;
class NoticeModal extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        setTimeout(() => {
            const {notice_visible:{type=''},notice_data, form:{setFieldsValue}} = this.props;
            const elem = this.refs.editorElem
            editor = new E(elem)
            editor.customConfig.onChange = (html) => {
                this.setState({content: html})
            }
            editor.customConfig.zIndex = 1000;
            editor.create();
            if (type==='edit') {
                setFieldsValue({
                    'title': notice_data.title,
                    'importance': notice_data.importance
                })
                editor.txt.html(notice_data.content)
            }
        },0)
    }
    postNotice(){
        const {actions:{setNoticeShow}, form:{validateFields}} = this.props;
        validateFields(async (err, value) => {
            console.log("value:", value);
        })
        setNoticeShow({
            show: false
        })
    }
    cancel(){
        const {actions:{setNoticeShow}} = this.props;
        setNoticeShow({
            show: false
        })
    }
    render(){
        const formItemLayout = {
			labelCol: {span: 8},
			wrapperCol: {span: 16},
		};
        const {form:{getFieldDecorator}, notice_visible = {type:'', show: false}} = this.props;
        return (
            <Modal
                maskClosable={true}
                visible = {notice_visible.show}
                width="80%"
                title="发布公告"
                footer = {null}
                onCancel = {this.cancel.bind(this)}
            >
                <Form>
                    <Row>
                        <Col span={6} offset={1}>
                            <FormItem {...formItemLayout} label = '公告标题'>
                                {getFieldDecorator('title', {
                                    rules: [{required: true, message: '请输入公告标题'}],
                                    initialValue: ''
                                })(
                                    <Input type='text' placeholder = '公告标题'/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={6} offset={1}>
                            <FormItem {...formItemLayout} label = '重要程度'>
                                {getFieldDecorator('importance', {
                                    rules: [{required: true, message: '请选择重要程度'}],
                                    initialValue: ''
                                })(
                                    <Select>
                                        <Option value="高">高</Option>
                                        <Option value="中">中</Option>
                                        <Option value="低">低</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col style={{marginTop:'4px'}} span={6} offset={1}>
                            <Button onClick={this.postNotice.bind(this)}>发布</Button>
                            <Button onClick={this.cancel.bind(this)}>取消</Button>
                        </Col>
                    </Row>
                </Form>
                <Row>
                    <Col span={22} offset={1}>
                        <div ref="editorElem"></div>
                    </Col>
                </Row>
            </Modal>
        )
    }
}
export default Form.create()(NoticeModal)
