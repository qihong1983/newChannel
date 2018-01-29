import React from 'react';
import {
	Layout,
	Menu,
	Breadcrumb,
	Icon,
	Affix
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
	IndexLink
} from 'react-router';
export default class userLeftNav extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (

			<Sider width={200} style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[this.props.value]}
          style={{ height: '100%', borderRight: 0 }}
        >

	    	<Menu.Item key="userList">
	    		<IndexLink to="/user/list" activeClassName="active"><Icon type="team" />用户列表</IndexLink>
	    	</Menu.Item>

    	

         
        </Menu>
      </Sider>
		);
	}
}