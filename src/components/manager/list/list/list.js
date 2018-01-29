import React from 'react';
import {
	Layout,
	Menu,
	Breadcrumb,
	Icon
} from 'antd';
const {
	SubMenu
} = Menu;
const {
	Header,
	Content,
	Footer,
	Sider
} = Layout;


import NProgress from 'nprogress';


export default class list extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		NProgress.start();
	}

	componentDidMount() {
		NProgress.done();
	}

	render() {
		return (
			<Content style={{ background: '#fff', padding: 24, margin: 24, minHeight:'400px'}}>
				渠道列表
			</Content>
		);
	}
}