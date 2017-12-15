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

		this.state = {
			currentPage: "/data/userprofile"
		}
	}

	componentWillMount() {
		console.log(this.props.location.pathname, 'aaaaa');
		this.setState({
			currentPage: this.props.location.pathname
		}, function() {
			// alert(this.state.currentPage);
		});

	}

	componentDidMount() {


		console.log('^^^^');
	}

	urlGetL() {

	}



	render() {

		console.log(this.state.currentPage, 'asdf');

		console.log(window.location.pathname);
		// this.setState({
		// 	currentPage: window.location.pathname
		// });
		// var dash = this.props.chilren || <ChannelDashboard />;
		return (
			<Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[window.location.hash]}
          style={{ height: '100%', borderRight: 0 }}
        >

	    	<Menu.Item key="#/data/userprofile">
	    		<IndexLink to="/data/userprofile" activeClassName="active"><Icon type="team" />用户概况</IndexLink>
	    	</Menu.Item>

	    	<Menu.Item key="/data/kpireport">
	    		<IndexLink to="/data/kpireport" activeClassName="active" ><Icon type="shop" />KPI报表</IndexLink>
	    	</Menu.Item>
         
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 0px 24px' }}>
      	{this.props.children}
      </Layout>
    </Layout>

		);
	}
}