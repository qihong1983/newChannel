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
  IndexLink
} from 'react-router';

export default class Main extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
{/*    <Header className="header" id="components-layout-demo-top-side">
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
    </Header>*/}
    {this.props.children}
    {/*<Footer style={{backgroundColor:'white'}}>footer</Footer>*/}
  </Layout>
    );
  }
}