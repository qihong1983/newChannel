import React from 'react';

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
	Spin,
	Alert,
	Divider,
	Modal,
	Input,
	LocaleProvider
} from 'antd';

const {
	Content
} = Layout;



export default class noAllow extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout>
 <Content style={{ background: '#ffffff', padding: 24, margin: 0, minHeight:'0px'}}>

 	 <Alert
      message="没有权限"
      description="请联系“xxx”，邮箱 xxx@corp.netease.com开通！！"
      type="warning"
      showIcon
    />
 </Content>


			</Layout>
		);
	}
}