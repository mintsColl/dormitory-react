import React, {Component} from 'react';
import {Modal, Table, Form, Col, Row, Input, Select, Divider} from 'antd';
import {Icon} from 'react-fa'
const FormItem = Form.Item;
const {Option} = Select;
class CreateDormitory extends Component{
    constructor(props){
        super(props);
        this.state = {
            options: []
        }
    }
    ok(){
        const {actions: {setCreateShow}} = this.props;
        setCreateShow({
            show: false,
            type: 'add'
        })
    }
    cancel(){
        const {actions: {setCreateShow}} = this.props;
        setCreateShow({
            show: false,
            type: 'add'
        })
    }
    data = ['张三', '李四', '王五']
    loop(data){
        let options = data.map((item, index) => {
            return <Option value={item}>{item}</Option>
        })
        return options;
    }
    render(){
        const formItemLayout = {
			labelCol: {span: 8},
			wrapperCol: {span: 16},
		};
        const {form: {getFieldDecorator}, createShow = {show: false, type:'add'}} = this.props;
        return (
            <Modal
                visible = {createShow.show}
                onOk = {this.ok.bind(this)}
                onCancel = {this.cancel.bind(this)}
                width = '50%'
            >
                <h1 style={{textAlign: 'center'}}>新建宿舍楼</h1>
                <Divider><Icon name='cut' /></Divider>
                <Form>
                    <Row>
                        <Col span = {16} offset = {3}>
                            <FormItem {...formItemLayout} label = '宿舍楼编号'>
                                {getFieldDecorator('doe_no',{
                                    rules: [{required: true, message: '请输入宿舍楼编号'}],
                                    initialValue: ''
                                })(
                                    <Input type='text' placeholder='请输入宿舍楼编号'/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16} offset={3}>
                            <FormItem {...formItemLayout} label = '宿舍楼名称'>
                                {getFieldDecorator('dor_name', {
                                    rules: [{required: true, message: '请输入宿舍楼名称'}]
                                })(
                                    <Input type='text' placeholder='请输入宿舍楼名称' />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span = {16} offset={3}>
                            <FormItem {...formItemLayout} label='宿管名称'>
                                {getFieldDecorator('dor_admin',{
                                    rules: [{required: true, message: '请分配宿管人员'}]
                                })(
                                    <Select placeholder = '请分配宿管'>
                                        {this.loop(this.data)}
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16} offset={3}>
                            <FormItem {...formItemLayout} label='描述'>
                                {getFieldDecorator('desc',{
                                    rules: [{required: false, message: '请输入描述信息'}]
                                })(
                                    <Input type='text' placeholder = '请输入描述'/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        )
    }
}
export default Form.create()(CreateDormitory)
