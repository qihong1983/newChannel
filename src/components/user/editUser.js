import React from 'react';


import {
	Router,
	Route,
	IndexRoute,
	IndexLink
} from 'react-router';

import {
	connect
} from 'react-redux';

import {
	bindActionCreators
} from 'redux';

import {
	Layout,
	Menu,
	Breadcrumb,
	Icon,
	Form,
	Button,
	Select,
	Table,
	DatePicker,
	Tabs,
	Card,
	Spin,
	Alert,
	Divider,
	Modal,
	notification,
	Input,
	LocaleProvider,
	Checkbox
} from 'antd';

const {
	Content
} = Layout;

const ButtonGroup = Button.Group;

const CheckboxGroup = Checkbox.Group;

const FormItem = Form.Item;

const Search = Input.Search;

const Option = Select.Option;

import NProgress from 'nprogress';


//用户权限列表
import {
	userAllow
} from '../../common/utils';

import * as actionCreators from '../../actions/userList/userList';

import TopNav from "../topNav/topNav";

import UserLeftNav from "../userLeftNav/userLeftNav";

class EditUser extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		NProgress.start();

		this.getEditData();

	}

	componentDidMount() {
		NProgress.done();
	}

	getEditData() {
		console.log(this.props, 'this.props');
		console.log(this.props.params.id);

		var data = {
			id: parseInt(this.props.params.id)
		}

		this.props.getEditData(data);

	}

	updateSuccessFail(bl) {
		if (bl) {
			var list = userAllow();

			let winArr = window.userInfo.data.auth.split(",");

			let isUser = false;
			winArr.map((v, k) => {
				if (v == "4") {
					isUser = true;
				}
			});

			if (!isUser) {
				var firstNum = winArr[0];
				var path = "";
				list.map((v, k) => {
					if (firstNum == v.key) {
						path = v.url;
					}
				});

				this.props.router.push(path);
			} else {
				this.props.router.push('/user/list');
			}

		}
	}

	isSuccessFail(bl) {

		if (bl) {
			var data = {};
			this.props.updateSystemAjax(data, this.updateSuccessFail.bind(this));
		}


		// if (bl) {
		// 	this.props.router.push('/user/list');
		// }

	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				var data = {
					email: this.props.userList.addUser.email + '@corp.netease.com',
					name: this.props.userList.addUser.name,
					auth: this.props.userList.addUser.auth.toString()
				};

				console.log(data, '修改数据参数');
				this.props.editUserAjax(data, this.isSuccessFail.bind(this));
			}

		});
	}

	cancelForm(e) {
		this.props.router.push('/user/list');
	}

	changeName(e) {
		var data = {
			email: this.props.userList.addUser.email,
			name: e.currentTarget.value,
			auth: this.props.userList.addUser.auth
		}

		this.setData(data);
	}



	setData(data) {
		this.props.createUserParamState(data);
	}

	changeRemember(e) {
		var data = {
			email: this.props.userList.addUser.email,
			name: this.props.userList.addUser.name,
			auth: e
		}

		this.setData(data);
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;

		const formItemLayout = {
			labelCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 6
				},
			},
			wrapperCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 14
				},
			},
		};

		const options = [{
			label: '渠道数据',
			value: 1
		}, {
			label: '渠道管理',
			value: 2
		}, {
			label: '系统管理',
			value: 3
		}, {
			label: '用户管理',
			value: 4
		}];


		console.log(this.props.userList.addUser.auth, '用户权限');



		const {
			auth
		} = this.props.userList.addUser;

		console.log(auth);

		// let auth = [1, 2];
		// console.log(auth, 'auth');
		return (
			<Layout>
				 <TopNav value={"user"} /> 
				 <Layout> 
					<UserLeftNav value={"userList"} /> 

					<Layout style={{ marginLeft: 200 }}>

          				{ /*表格区域开始*/ }
			            <Content style={{ background: '#fff', padding: "24px", margin: 24, marginTop:"24px", minHeight: 280  }}>

			            	<Card title="新建用户" bordered={false} style={{ width: "100%" }} noHovering={true}>
								<Form layout={"horizontal"} onSubmit={this.handleSubmit.bind(this)} style={{maxWidth:"600px"}}>
							        <FormItem label="姓名" {...formItemLayout}>
							          {getFieldDecorator('userName', {
							            rules: [{ required: true, message: '请输入你的姓名!' }],
							            initialValue: this.props.userList.addUser.name
							          })(
							            <Input placeholder="请输入你的姓名 " onChange={this.changeName.bind(this)} />
							          )}
							        </FormItem>
							        <FormItem label="邮箱" {...formItemLayout}>
							          {getFieldDecorator('textEmail', {
							            rules: [{ required: true, message: '请输入你的邮箱前缀!' }],
							            initialValue: this.props.userList.addUser.email
							          })(
							             <Input type="textEmail" disabled={true} addonAfter="@corp.netease.com" placeholder="请输入你的邮箱前缀" />
							          )}
							        </FormItem>
							        <FormItem label="模块权限" {...formItemLayout}>
							          {getFieldDecorator('remember', {
							          	 rules: [{ required: true, message: '最少选一项!' }],
							            valuePropName: 'checked',
							            initialValue: this.props.userList.addUser.auth
							          })(
							             <CheckboxGroup type="remember" options={options} onChange={this.changeRemember.bind(this)} value={this.props.userList.addUser.auth} />
							          )}
							         
							        </FormItem>

							         <FormItem style={{textAlign:"center"}}>

									    <ButtonGroup>
									    
									      <Button type="primary" htmlType="submit" style={{ textAlign: 'right', padding: "0px 24px" }}>新建</Button>

									      <Button type="default" onClick={this.cancelForm.bind(this)} >取消</Button>

									    </ButtonGroup>

							         </FormItem>

							    </Form>
						    </Card>
			            	
			            </Content>
            			{/*表格区域结束*/}

					</Layout>

				 </Layout>



			</Layout>
		);
	}
}

EditUser = Form.create()(EditUser);

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
	return {
		userList: state.userList
	}
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
	//全量
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);