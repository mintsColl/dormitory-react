import React, {Component} from 'react';
import {Aside} from '../../_platform/layout/Aside';
import {Body} from '../../_platform/layout/Body';
import {DynamicTitle} from '../../_platform/layout/DynamicTitle'
import {Sidebar} from '../../_platform/layout/SideBar'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {actions as platformActions} from '../../_platform/store/global';
import {Tabs, Button} from 'antd';
import {SubTree, CreateDistri, DistriDetail} from '../components/Distri';
import {actions} from '../store/createDistri';
@connect(
    state => {
        const {accomm: {createDistri}} = state;
        return {...createDistri}
    },
    dispatch => ({
        actions: bindActionCreators({...platformActions, ...actions}, dispatch)
    })
)
export default class Dirsti extends Component{
    constructor(props){
        super(props);
        this.state = {
            options_data: [],
            type: ''
        }
    }
    componentWillReceiveProps(nextProps){
        const {selectNode = []} = nextProps;
        console.log("selectNode:",selectNode);
        if (selectNode.length === 0) {
            return;
        }
        let type = selectNode[0].split('--')[4];
        this.setState({type})
    }
    async componentDidMount(){
        const {actions: {getStudent}} = this.props;
        let rst = await getStudent();
        let stu_depart = [], obj = {}, obj2 = {};
        for (var i = 0; i < rst.length; i++) {
            let depart = rst[i].stu_depart;
            let class1 = rst[i].stu_class;
            stu_depart.push(depart);
            obj[depart] = [];
            obj2[class1] = []
        }
        for (var i = 0; i < rst.length; i++) {
            let depart = rst[i].stu_depart;
            let class1 = rst[i].stu_class;
            if(obj[depart]){
                let obj_class = {}
                obj_class[class1] = []
                obj[depart].push(obj_class);
                obj2[class1].push(rst[i].stu_name)
            }
        }
        for (var variable in obj) {
            if (obj.hasOwnProperty(variable)) {
                // 去重
                for (var i = 0; i < obj[variable].length; i++) {
                    obj[variable][i] = JSON.stringify(obj[variable][i]);
                }
                obj[variable] = [...new Set(obj[variable])];
                for (var i = 0; i < obj[variable].length; i++) {
                    obj[variable][i] = JSON.parse(obj[variable][i]);
                }
            }
        }
        for (var variable in obj) {
            if (obj.hasOwnProperty(variable)) {
                for (var i = 0; i < obj[variable].length; i++) {
                    let class1 = obj[variable][i];
                    for (var temp in class1) {
                        for (var te in obj2) {
                            if (temp == te) {
                                obj[variable][i][temp].push(...obj2[temp])
                            }
                        }
                    }
                }
            }
        }
        let options_data = [];
        for (var variable1 in obj) {
            if (obj.hasOwnProperty(variable1)) {
                let obj_options = {}
                obj_options['value'] = variable1;
                obj_options['label'] = variable1;
                obj_options["children"] = obj[variable1];
                options_data.push(obj_options)
                let temp_arr = [];
                for (var i = 0; i < obj_options["children"].length; i++) {
                    let obj_temp = obj_options["children"][i];
                    console.log("obj_temp:",obj_temp);
                    let temp_stuarr = [];
                    let obj_class = {};
                    for (var variable2 in obj_temp) {
                        if (obj_temp.hasOwnProperty(variable2)) {
                            obj_class['value'] = variable2;
                            obj_class['label'] = variable2;
                            obj_class["children"] = obj_temp[variable2];
                            temp_arr.push(obj_class);
                            for (var j = 0; j < obj_class["children"].length; j++) {
                                let temp_stu = {};
                                temp_stu["value"] = obj_class["children"][j];
                                temp_stu["label"] = obj_class["children"][j];
                                temp_stuarr.push(temp_stu);
                            }
                            obj_class["children"] = temp_stuarr;
                        }
                    }
                }
                obj_options["children"] = temp_arr;
            }
        }
        this.setState({options_data});
    }
    render(){
        return (
            <div style={{overflow: 'hidden', 'position':'relative'}}>
                <DynamicTitle title = "分配宿舍" {...this.props} />
                <Sidebar>
                    <SubTree {...this.props} />
                </Sidebar>
                <CreateDistri {...this.props} {...this.state} />
                {this.state.type === 'dormitory' && <DistriDetail {...this.props} />}
            </div>
        )
    }
}
