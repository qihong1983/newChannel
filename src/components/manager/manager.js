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
  Link
} from 'react-router';

export default class Manager extends React.Component {


  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      currentPage: this.props.location.pathname
    }, function() {
      // alert(this.state.currentPage);
    });
  }



  render() {
    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
          >

            <Menu.Item key="/manager/list">
              
              <IndexLink to="/manager/list" activeClassName="active"><Icon type="team" />渠道数据</IndexLink>

            </Menu.Item>
            <Menu.Item key="/manager/group">
              
              <IndexLink to="/manager/group" activeClassName="active" ><Icon type="shop" />渠道分组</IndexLink>
              
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