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

export default class user extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
{/*         <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
          >

            <Menu.Item key="/user/list">
              
              <IndexLink to="/user/list" activeClassName="active"><Icon type="team" />用户列表</IndexLink>

            </Menu.Item>
           
           
          </Menu>
      </Sider>*/}
        {/*<Layout style={{ padding: '0 0px 24px' }}>*/}
         {this.props.children}
        {/*</Layout>*/}
      </Layout>
    );
  }
}