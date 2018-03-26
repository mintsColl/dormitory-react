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
        const {selectNode = [], distriDor = {show: false, type: 'add'}, actions: {showDistriDor, postDistri, is_fresh, putDistri}} = this.props;
        let data = {
            dor_no: this.state.dor_name,
            stu_no: this.state.stu_no
        }
        if (distriDor.type === "add") {
            let rst = await postDistri({},data);
            if (rst[0].status === "ok") {
                Notification.success({
                    message: '录入成功'
                });
                is_fresh({
                    fre: true,
                    dor_no: this.state.dor_name
                });
            }else{
                Notification.success({
                    message: '录入失败'
                })
            }
        }else{
            let rst = await putDistri({},data);
            if (rst[0].status === "ok") {
                Notification.success({
                    message: '变更成功'
                });
                is_fresh({
                    fre: true,
                    dor_no: this.state.dor_name
                });
            }else{
                Notification.success({
                    message: '变更失败'
                })
            }
        }
        showDistriDor({show: false});
    }
    cancel(){
        const {selectNode = [], actions: {showDistriDor}} = this.props;
        showDistriDor({show: false});
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
    findData(originData, stu_no){
        for (var i = 0; i < originData.length; i++) {
            if (originData[i].stu_name === stu_no) {
                return originData[i]
            }
        }
    }
    render(){
        const {distriDor = {show: false, type: 'add'}, editData = {}} = this.props;
        let stu_no = "", arr = [];
        const {options_data = [], originData} = this.props;
        if (distriDor.type === 'edit') {
            stu_no = editData.stu_no;
            let value = this.findData(originData, stu_no);
            if (value) {
                arr = [value.stu_depart, value.stu_class, value.stu_name];
            }
        }else{
            arr = []
        }
        const formItemLayout = {
			labelCol: {span:10},
			wrapperCol: {span: 13, offset:1},
		};
        return (
            <Modal
                visible = {distriDor.show}
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
                                    defaultValue = {arr}
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
