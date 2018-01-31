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

import * as actionCreators from '../../actions/userList/userList';

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
	Spin,
	Alert,
	Divider,
	Modal,
	Input,
	LocaleProvider
} from 'antd';

const {
	Content
} = Layout;

const Search = Input.Search;

const FormItem = Form.Item;
const Option = Select.Option;

const confirm = Modal.confirm;

import NProgress from 'nprogress';

import TopNav from "../topNav/topNav";

import UserLeftNav from "../userLeftNav/userLeftNav";

class UserListIndex extends React.Component {

	constructor(props) {
		super(props);
	}


	componentWillMount() {
		NProgress.start();

		this.getTableData();
	}

	componentDidMount() {
		NProgress.done();
	}

	getTableData() {
		var data = {
			offset: this.props.userList.Param.offset,
			limit: this.props.userList.Param.limit,
			name: this.props.userList.Param.name
		};

		this.props.getTableData(data);
	}

	//点击查询 
	clickQuery(e) {
		this.getTableData();
	}

	clickDelete(e) {
		console.log(e.currentTarget.dataset.uid, '删除');
		console.log(e.currentTarget.dataset.email, '删除');

		let uid = e.currentTarget.dataset.uid;


		var that = this;

		confirm({
			title: '是否删除用户?',
			content: e.currentTarget.dataset.email,
			okText: '确定',
			okType: 'danger',
			cancelText: '取消',
			onOk() {
				console.log(that, 'that');

				var data = {
					id: uid
				}

				that.props.deleteUser(data, that.deleteSuccess.bind(that));
				console.log('OK');


			},
			onCancel() {
				console.log('Cancel');
			},
		});

	}

	getColumns() {

		let arr = [];
		this.props.userList.listTable.columns.map((v, k) => {
			if (v.dataIndex == "uid") {
				v.render = (text, record) => (
					<span>
				      <IndexLink to={"/user/list/edit/" + record.uid} activeClassName="active">修改</IndexLink>
				      <span className="ant-divider" />
				      <a href="javascript:void(0);" data-uid={record.uid} data-email={record.email} onClick={this.clickDelete.bind(this)} className="ant-dropdown-link">删除</a>
				    </span>
				);

			}

			arr.push(v);
		});

		return arr;
	}

	changeName(e) {

		var data = {
			name: e.currentTarget.value
		}

		this.props.getName(data);

	}

	handleTableChange(pagination, filters, sorter) {
		console.log(pagination, '分页信息');

		var data = {
			offset: pagination.current,
			limit: pagination.pageSize,
			name: this.props.userList.Param.name
		};

		this.props.getTableData(data);



	}

	deleteSuccess(bl) {

		if (bl) {
			var data = {
				offset: this.props.userList.Param.offset,
				limit: this.props.userList.Param.limit,
				name: this.props.userList.Param.name
			};

			this.props.getTableData(data);
		}
	}

	render() {

		var columns = this.getColumns();

		console.log(columns);

		var pagination = {
			current: this.props.userList.Param.offset,
			pageSize: this.props.userList.Param.limit,
			total: this.props.userList.listTable.total,
			defaultPageSize: this.props.userList.Param.limit,
			showSizeChanger: true
		}

		return (
			<Layout>
				 <TopNav value={"user"} /> 
				 <Layout> 
					<UserLeftNav value={"userList"} /> 

					<Layout  style={{ marginLeft: 200 }}>
						{ /*筛选区域开始*/ }
          				<Content style={{ background: '#ffffff', padding: 24, margin: 0, minHeight:'0px'}}>
          					 <Form layout="inline">
								{/*搜索邮箱前缀开始*/}
				                <FormItem label="">
				                 <Input placeholder="搜索邮箱前缀" ref="searchName" onChange={this.changeName.bind(this)} value={this.props.userList.Param.name}
				                 	addonAfter={<Icon type="search" />} 
				                 />
				                </FormItem>
				                {/*搜索邮箱前缀结束*/}

				                <Button type="primary" size={"large"} onClick={this.clickQuery.bind(this)}>查询</Button>
				              </Form>
          				</Content>
          				{/*筛选区域结束*/}
          				{ /*表格区域开始*/ }
			            <Content style={{ background: '#fff', padding: "24px", margin: 24, marginBottom: 0, marginTop:"24px", minHeight: 380 }}>

			            	<div style={{width:"100%",marginBottom: "10px"}} className="clearfix">
			            	 	{/*下载Excel*/}
                  				<Button type="primary" style={{float:"right"}}>
                  					 <IndexLink to={"/user/list/create"} activeClassName="active">新建</IndexLink>
                  				</Button>
			            	</div>
			            	
			            	<Table 
				                loading={this.props.userList.Param.loading} 
				                locale={{"emptyText": "暂无数据"}} 
				                columns={columns} 
				                dataSource={this.props.userList.listTable.result}
								pagination={pagination}
								onChange={this.handleTableChange.bind(this)}
							/>
			            </Content>
            			{/*表格区域结束*/}

					</Layout>

				 </Layout>



			</Layout>
		);
	}
}



//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
	return {
		userList: state.userList
	}
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {

	//全量
	return bindActionCreators(actionCreators, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(UserListIndex);