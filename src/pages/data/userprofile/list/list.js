import React from 'react';

import {
	connect
} from 'react-redux';

import {
	Router,
	Route,
	IndexRoute,
	Link,
	IndexLink
} from 'react-router';

import NavLink from '../../../../common/NavLink/navlink';

import {
	Layout,
	Menu,
	Breadcrumb,
	Icon,
	Form,
	Button,
	Select,
	Table,
	DatePicker
} from 'antd';

import moment from 'moment';

import NProgress from 'nprogress';

const {
	MonthPicker,
	RangePicker
} = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const {
	SubMenu
} = Menu;
const {
	Header,
	Content,
	Footer,
	Sider
} = Layout;

const FormItem = Form.Item;
const Option = Select.Option;

import {
	bindActionCreators
} from 'redux'

const thunk = require('redux-thunk').default;

import cookie from 'react-cookies';

// import * as actionCreators from './actions';

import * as actionCreators from '../../../../actions/data/userprofile/list/list.js';


class userProfile extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		NProgress.start();

		var token = cookie.load('token');
		if (token) {
			this.props.list(token, this.props);
		} else {
			this.props.router.push('/login');
		}
	}

	componentDidMount() {
		NProgress.done();
	}

	handleChange(value) {
		// console.log(value);
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



		const columns = [{
			title: '日期',
			dataIndex: 'date',
			key: 'date',
		}, {
			title: '新增用户',
			dataIndex: 'newUsers',
			key: 'newUsers',
		}, {
			title: '活跃用户',
			dataIndex: 'activeUser',
			key: 'activeUser',
		}, {
			title: '操作',
			dataIndex: 'oprations',
			key: 'oprations',
			render: (text, record) => (
				<Link to={{pathname: "/data/userprofile/"+record.key}} key={record.key} activeClassName="active">编辑{record.key}</Link>

			),
		}];


		// console.log(this.props.tableList, 'this.props.list');

		var tableList = this.props.tableList;

		// console.log(this.props, '###@@');

		// console.log(dataSource, '@@@##');
		// console.log(this.props, 'asdfasdfasdfas');
		// console.log(this.props.aReducer.list, 'this.props.aReducer.list');


		return (
			<div>
        <Content style={{ background: '#fff', padding: 24, margin: 0}}>
          <Form layout="inline">
          	<FormItem label="操作系统">
          		<Select 
          			placeholder="Select a option and change input text above" 
          			dropdownMatchSelectWidth={true}  
          			defaultValue=""
          			style={{width:"100px"}}>
	          		<Option value="">全部</Option>
		            <Option value="24">Android</Option>
		            <Option value="27">iOS</Option>
	            </Select>
          	</FormItem>
          	<FormItem label="线上\线下">
          		<Select 
          			placeholder="Select a option and change input text above" 
          			dropdownMatchSelectWidth={true}
          		 	defaultValue="" 
          		 	style={{width:'100px'}}>
	          		<Option value="">全部</Option>
		            <Option value="1">线上</Option>
		            <Option value="2">线下</Option>
	            </Select>
          	</FormItem>

			<FormItem label="渠道组">
          		<Select 
          			showSearch={true}
          			placeholder="搜索渠道组" 
          			dropdownMatchSelectWidth={true}
          		 	defaultValue=""
          		 	style={{width:'160px'}}
          		 	optionFilterProp="children"
          		 	onChange={this.handleChange.bind(this)}>
	          		<Option value="">全部</Option>
		            <Option value="1">samsung_total_news</Option>
		            <Option value="2">kp_total_news</Option>
		            <Option value="3">oppo_total_news</Option>
	            </Select>
          	</FormItem>

			<FormItem label="">
          		<Select 
			        mode="combobox"
			        placeholder="搜索渠道名称"
			        notFoundContent=""
			        style={{width:"100px"}}
			        defaultActiveFirstOption={false}
			        showArrow={false}
			        filterOption={false}
          		 >
				{options}
	            </Select>
          	</FormItem>

			<FormItem label="" >
	          	<RangePicker size="large"
			      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
			      format={dateFormat}
			      style={{width:"260px"}}
			    />
			</FormItem>
          	 <Button size="large" type="primary">查询</Button>

          </Form>
        </Content>


        <Content style={{ background: '#fff', padding: "24px", margin: 24, marginTop:"24px", minHeight: 280 }}>
          <Table dataSource={this.props.tableList} columns={columns} loading={true} />
        </Content>
        </div>
		);
	}
}


//将state.counter绑定到props的counter
const mapStateToProps = (state) => {

	console.log(state, 'statestate');
	return {
		tableList: state.userProfile.List.tableList,
		os: state.userProfile.List.os
	}
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {

	//全量
	return bindActionCreators(actionCreators, dispatch);

	// return {
	// 	init: bindActionCreators({
	// 		addTodo
	// 	}, dispatch),
	// 	init2: bindActionCreators({
	// 		init2
	// 	}, dispatch)
	// }

};

export default connect(mapStateToProps, mapDispatchToProps)(userProfile);