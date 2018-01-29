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
	Sider
} = Layout;

import {
	Router,
	Route,
	IndexRoute,
	IndexLink,
	Link,
	browserHistory
} from 'react-router';

import NavLink from '../../common/NavLink/navlink';


export default class Data extends React.Component {


	constructor(props) {
		super(props);

	}

	componentWillMount() {

	}

	render() {


		return (
			<Layout style={{ padding: '0 0px 24px' }}>
		      	{this.props.children}
		    </Layout>
		);
	}
}