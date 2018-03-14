import React, {Component} from 'react'
import {Modal, Row, Col, Form, Rate} from 'antd'
const FormItem = Form.FormItem
export default class ModalEvalute extends Component{
    ok(){
        const {actions: {setShowEvalute}} = this.props;
        setShowEvalute(false)
    }
    cancel(){
        const {actions: {setShowEvalute}} = this.props;
        setShowEvalute(false)
    }
    render(){
        const formItemLayout = {
			labelCol: {span: 8},
			wrapperCol: {span: 16},
		};
        const {showEvalute = false, form: {getFieldDecorator}} = this.props;
        console.log("this.props:",this.props);
        return (
            <Modal
                visible = {showEvalute}
                width = '60%'
                onOk = {this.ok.bind(this)}
                onCancel = {this.cancel.bind(this)}
            >
                {/* <Form>
                    <Row>
                        <Col>
                            <FormItem {...formItemLayout} label = '评价内容'>
                                {getFieldDecorator('rate', {
                                    rules: [{required: true, message: '请评星'}]
                                })(
                                    <Rate allowHalf defaultValue={2.5} />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                </Form> */}
            </Modal>
        )
    }
}
