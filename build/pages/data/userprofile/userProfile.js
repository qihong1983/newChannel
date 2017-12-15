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
export default class userProfile extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {


		return (
			<div>
        	{this.props.children}
        </div>
		);
	}
}