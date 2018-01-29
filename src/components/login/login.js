import {
	Form,
	Icon,
	Input,
	Button,
	Checkbox
} from 'antd';
const FormItem = Form.Item;

import React from 'react';

import cookie from 'react-cookies';
import NProgress from 'nprogress';

class Login extends React.Component {


	constructor(props) {
		super(props);
	}

	componentWillMount() {
		NProgress.start();
	}

	componentDidMount() {
		cookie.remove('token', {
			path: '/'
		});
		NProgress.done();
	}



	toQueryString(obj) {
		return obj ? Object.keys(obj).sort().map(function(key) {
			var val = obj[key];
			if (Array.isArray(val)) {
				return val.sort().map(function(val2) {
					return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
				}).join('&');
			}

			return encodeURIComponent(key) + '=' + encodeURIComponent(val);
		}).join('&') : '';
	}

	handleSubmit(e) {
		e.preventDefault();



		this.props.form.validateFields((err, values) => {

			if (!err) {
				console.log('Received values of form: ', values);
			} else {
				console.log(values, '成功');
			}
			fetch("http://127.0.0.1:3001/token", {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: this.toQueryString({
					username: values.userName,
					password: values.password
				})
			}).then(function(res) {

				// res.status = 200;
				res.json().then(res => {

					if (res.status) {
						cookie.save('token', res.token, {
							path: '/'
						});

						//登录成功跳转到默认页面
						console.log(this.props.router.push('/data/userprofile'));
					} else {
						//todo 失败弹出层
					}
				});
			}.bind(this));


		});
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<div>
				<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">

				 <FormItem>
		          {getFieldDecorator('userName', {
		            rules: [{ required: true, message: 'Please input your username!' }],
		          })(
		            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
		          )}
				 </FormItem>
				 <FormItem>
		          {getFieldDecorator('password', {
		            rules: [{ required: true, message: 'Please input your Password!' }],
		          })(
		            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
		          )}
		        </FormItem>
		        <FormItem>
		          {getFieldDecorator('remember', {
		            valuePropName: 'checked',
		            initialValue: true,
		          })(
		            <Checkbox>Remember me</Checkbox>
		          )}
		          <a className="login-form-forgot" href="">Forgot password</a>
		          <Button type="primary" htmlType="submit" className="login-form-button">
		            Log in
		          </Button>
		          Or <a href="">register now!</a>
		        </FormItem>

				</Form>
			</div>
		);
	}
}

export default Login = Form.create()(Login);