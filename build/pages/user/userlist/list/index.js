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

import {
	Router,
	Route,
	IndexRoute,
	IndexLink,
	Link
} from 'react-router';


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
			<Layout>
    <Header className="header" id="components-layout-demo-top-side">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
        	<IndexLink to="/data" activeClassName="active">渠道数据</IndexLink>
        </Menu.Item>
        <Menu.Item key="2">
        	<IndexLink to="/manager" activeClassName="active">渠道管理</IndexLink>
        	
        </Menu.Item>
        <Menu.Item key="3">
        	<IndexLink to="/user" activeClassName="active">用户管理</IndexLink>
        </Menu.Item>
      </Menu>
    </Header>
    <Layout>
 <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
          >

            <Menu.Item key="/user/list">
              
              <IndexLink to="/user/list" activeClassName="active"><Icon type="team" />用户列表</IndexLink>

            </Menu.Item>
           
           
          </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
		);
	}
}