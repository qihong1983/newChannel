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
	DatePicker
} from 'antd';

const {
	Header,
	Content,
	Footer,
	Sider
} = Layout;
import NProgress from 'nprogress';

export default class edit extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		NProgress.start();
	}

	componentDidMount() {
		NProgress.done();

		console.log(this.props.params.id, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
	}

	render() {
		return (
			<div>
			<Content style={{ background: '#fff', padding: 24, margin: 24, minHeight:'400px'}}>
				修改 id=> {this.props.params.id}
			</Content>
			</div>
		);
	}
}