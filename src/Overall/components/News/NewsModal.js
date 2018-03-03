import React,{Component} from 'react';
import {Modal, Row, Col, Input, Form, Button} from 'antd';
import E from 'wangeditor'
const FormItem = Form.Item;
let editor;
class NewsModal extends Component{
    constructor(props) {
		super(props);
		this.state = {
			content: "",
		}
	}
    componentDidMount(){
        setTimeout(() => {
            const elem = this.refs.editorElem
            editor = new E(elem);
            editor.customConfig.onChange = html => {
                this.setState({content: html})
            }
            editor.customConfig.zIndex = 1000;
            editor.create();
        },0)
    }
    postData(){
        const {actions:{setNewsShow}} = this.props;
        setNewsShow(false);
    }
    cancel(){
        const {actions:{setNewsShow}} = this.props;
        setNewsShow(false);
    }
    render(){
        const formItemLayout = {
			labelCol: {span: 8},
			wrapperCol: {span: 16},
		};
        const {form:{getFieldDecorator}, news_visible = false} = this.props;
        return(
            <Modal
                title = '发布新闻'
                width = '80%'
                visible = {news_visible}
                footer = {null}
                maskClosable={true}
                >
                    <Form>
                        <Row>
                            <Col span={6} offset={1}>
                                <FormItem {...formItemLayout} label = '新闻标题'>
                                    {getFieldDecorator('title', {
                                        rules: [{required: true, message: '请输入新闻标题'}],
                                        initialValue: ''
                                    })(
                                        <Input type='text' placeholder = '新闻标题'/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col style={{marginTop:'4px'}} span={6} offset={1}>
                                <Button onClick={this.postData.bind(this)}>发布</Button>
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
export default Form.create()(NewsModal)
