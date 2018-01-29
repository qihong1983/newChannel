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
	IndexLink
} from 'react-router';
export default class dataLeftNav extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[this.props.value]}
          style={{ height: '100%', borderRight: 0 }}
        >

	    	<Menu.Item key="profile">
	    		<IndexLink to="/data/profile" activeClassName="active"><Icon type="team" />用户概况</IndexLink>
	    	</Menu.Item>

	    	<Menu.Item key="kpi">
	    		<IndexLink to="/data/kpi" activeClassName="active" ><Icon type="shop" />KPI报表</IndexLink>
	    	</Menu.Item>	    	

         
        </Menu>
      </Sider>
		);
	}
}