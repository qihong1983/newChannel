import React from 'react';

import {
  Router,
  Route,
  IndexRoute,
  IndexLink
} from 'react-router';

import {
  connect
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Form,
  Button,
  Select,
  Table,
  DatePicker,
  Tabs,
  Divider,
  Modal,
  LocaleProvider
} from 'antd';

// import zhCN from 'antd/lib/locale-provider/zh_CN';

const ButtonGroup = Button.Group;

const TabPane = Tabs.TabPane;

const {
  SubMenu
} = Menu;
const {
  Header,
  Content,
  Sider
} = Layout;

const FormItem = Form.Item;
const Option = Select.Option;



const thunk = require('redux-thunk').default;

const {
  MonthPicker,
  RangePicker
} = DatePicker;

import moment from 'moment';

import NProgress from 'nprogress';

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
import TopNav from "../topNav/topNav";

import DataLeftNav from "../dataLeftNav/dataLeftNav";

import "../../theme/profile/profile.css";
// import * as actionCreators from '../../actions/profileList/profileList.js';



const columns = [{
  title: '日期',
  dataIndex: 'day'
}, {
  title: '新增用户',
  dataIndex: 'newUser'
}, {
  title: '用户质量',
  dataIndex: 'qualityPer'
}, {
  title: '活跃用户',
  dataIndex: 'activeUser'
}, {
  title: '回访用户',
  dataIndex: 'visitUser'
}, {
  title: '流失用户',
  dataIndex: 'loseUser'
}, {
  title: '回归用户',
  dataIndex: 'backUser'
}, {
  title: '迁出用户',
  dataIndex: 'outUser'
}];



export default class kpiDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      pagination: {
        current: 1,
        pageSize: 10,
        total: 101,
        pageSizeOptions: ['10', '20', '30', '40'],
        defaultPageSize: 10,
        showSizeChanger: true,
        total: 500
      }
    }

  }

  componentWillMount() {
    NProgress.start();
    // this.props.getTable(this.props.profileList.Param);
  }

  componentDidMount() {
    NProgress.done();

  }

  showModal(e) {
    console.log(e);
    this.setState({
      visible: true
    });
  }

  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }

  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleChange(value) {
    console.log(value);
  }

  searchChannel(value) {
    console.log(value);
  }

  changeTab(id) {
    console.log(id);
  }

  render() {

    var searchData = [{
      value: 1,
      text: "qihong1"
    }, {
      value: 2,
      text: "qihong2"
    }];

    var fetching = false;

    var options = searchData.map(d => <Option key={d.text}>{d.text}</Option>);

    console.log(this.props, 'this.props');

    return (

      <Layout>
        <TopNav value={"data"} />
        <Layout>
          <DataLeftNav value={"kpi"} />
          <Layout>

            <Content style={{ background: '#ffffff', padding: 24, margin: 0, minHeight:'0px'}}>
             KPI报表
            </Content>

          </Layout>
        </Layout>

       
      </Layout>

    );
  }
}

// //将state.counter绑定到props的counter
// const mapStateToProps = (state) => {

//   return {
//     profileList: state.profileList
//   }
// };


// //将action的所有方法绑定到props上
// const mapDispatchToProps = (dispatch, ownProps) => {

//   //全量
//   return bindActionCreators(actionCreators, dispatch);

// };

// export default connect(mapStateToProps, mapDispatchToProps)(kpiDetail);