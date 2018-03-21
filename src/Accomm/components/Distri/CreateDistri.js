import React, {Component} from 'react';
import {Button, Table, Modal, Divider, Notification, Cascader, Form, Row, Col} from 'antd';
import {Icon} from 'react-fa'
const FormItem = Form.Item;
export default class CreateDistri extends Component{
    constructor(props){
        super(props);
        this.state = {
            dor_name: '',
            stu_no: ''
        }
    }
    async ok(){
        const {selectNode = [], actions: {showDistriDor, postDistri}} = this.props;
        let data = {
            dor_no: this.state.dor_name,
            stu_no: this.state.stu_no
        }
        let rst = await postDistri({},data);
        if (rst[0].status === "ok") {
            Notification.success({
                message: '录入成功'
            })
        }else{
            Notification.success({
                message: '录入失败'
            })
        }
        showDistriDor(false);
    }
    cancel(){
        const {selectNode = [], actions: {showDistriDor}} = this.props;
        showDistriDor(false);
    }
    displayRender(label) {
        return label[label.length - 1];
    }
    change(value){
        let stu_no = value[2];
        this.setState({stu_no});
    }
    componentWillReceiveProps(nextProps){
        let {node = []} = nextProps;
        if (node.length === 0) {
            return;
        }
        let dor_name = node[0].dor_name;
        this.setState({dor_name});
    }
    render(){
        const {distriDor = false} = this.props;
        const {options_data = []} = this.props;
        const formItemLayout = {
			labelCol: {span:10},
			wrapperCol: {span: 13, offset:1},
		};
        return (
            <Modal
                visible = {distriDor}
                onOk = {this.ok.bind(this)}
                onCancel = {this.cancel.bind(this)}
                width = "40%"
            >
                <h1>分配宿舍</h1>
                <Divider><Icon name='cut' /></Divider>
                <Form>
                    <Row>
                        <Col offset = {2} span = {8}>
                            <FormItem {...formItemLayout}  label = '宿舍号:'>
                                <span>{this.state.dor_name}</span>
                            </FormItem>
                        </Col>
                        <Col offset = {1} span = {11}>
                            <FormItem label = '选择学生:' {...formItemLayout}>
                                <Cascader
                                    options = {options_data}
                                    displayRender = {this.displayRender}
                                    expandTrigger="hover"
                                    onChange = {this.change.bind(this)}
                                 />
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        )
    }

}
