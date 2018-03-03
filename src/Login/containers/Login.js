import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Input, Button, Checkbox, Form, Icon, Notification} from 'antd';
import {actions} from '../store/login'
import {injectReducer} from '../../store'
import {Link} from 'react-router-dom'
import reducer from '../store/login'
import './Login.less'
const FormItem = Form.Item;
@connect(
    state => {
        const {login = {}} = state;
        return {...login}
    },
    dispatch => ({
        actions:bindActionCreators({...actions},dispatch)
    })
)
class Login extends Component {
    componentDidMount(){
        // const {default: reducer} = await import('../store/login');
        injectReducer('login', reducer);
    }

    login(){
        const {
            actions:{getLogin},
            form:{validateFields}
        } = this.props;
        validateFields(async (err, values) => {
            if (!err) {
                let login_info = {
                    user_name:values["userName"],
                    user_pass:values["password"]
                }
                let rst = await getLogin(login_info)
                let res = JSON.parse(rst)
                if (res && res[0].user_name) {
                    Notification.success({
                        icon: <Icon type="smile-o" style={{ color: '#108ee9' }}/>,
                        duration:2,
                        message:"登录成功!!"
                    })
                    // 登录成功，跳转
                    const {history} = this.props;
                    history.replace('/home')
                }else{
                    Notification.warn({
                        icon: <Icon type="frown-o" style={{ color: '#108ee9' }}/>,
                        duration:2,
                        message:'登录失败!!'
                    })
                }
            }
        })
    }
    render(){
        const {actions:{changeAdditionField},form:{validateFields, getFieldDecorator}} = this.props;
        return (
            <div className="wrap">
                <div className="wrap_content">
                    <div className="login_box">
                        <div className="title">宿舍管理系统</div>
                        <div className="wel">欢迎登录</div>
                        <Form className="login-form">
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                    )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                    )}
                                <a className="login-form-forgot" href="">忘记密码</a>
                                <Button type="primary" htmlType="submit" onClick = {this.login.bind(this)} className="login-form-button">
                                    登录
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Form.create()(Login)
