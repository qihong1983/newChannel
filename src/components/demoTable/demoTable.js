import React from 'react';

import {
	Table,
	Icon,
	Layout,
	Divider,
	LocaleProvider
} from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';

const {
	Content
} = Layout;


const columns = [{
	title: 'Name',
	dataIndex: 'name',
	sorter: true,
	render: name => `${name.first} ${name.last}`,
	width: '20%',
}, {
	title: 'Gender',
	dataIndex: 'gender',
	filters: [{
		text: 'Male',
		value: 'male'
	}, {
		text: 'Female',
		value: 'female'
	}, {
		text: 'Female1',
		value: 'male1'
	}],
	width: '20%',
}, {
	title: 'Email',
	dataIndex: 'email',
}];


export default class demoTable extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			data: [],
			pagination: {
				current: 1,
				pageSize: 10,
				total: 101,
				defaultPageSize: 10,
				showSizeChanger: true
			},
			loading: false
		}

	}


	componentDidMount() {
		this.getData();
	}

	handleTableChange(pagination, filters, sorter) {


		console.log(pagination, 'pagination');
		console.log(filters, 'filters');
		console.log(sorter, 'sorter');
		// pager.current = pagination.current;
		this.setState({
			pagination: {
				current: pagination.current,
				pageSize: 10,
				total: pagination.total
			}
		});

	}

	getData() {
		fetch("http://127.0.0.1:3001/table_data", {
			method: 'GET',
			mode: 'cors',
			cache: 'default',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).then(function(res) {
			res.json().then(res => {

				console.log(this, 'this');
				console.log(res, 'res');

				this.setState({
					data: res.results,
					pagination: {
						total: 500
					}
				});

			});
		}.bind(this));
	}

	render() {

		console.log(this.state.data, 'this.state.data');
		return (

			<Content style={{ background: '#fff', padding: 24, margin: 0}}>
				<Table columns={columns}
			        rowKey={record => record.registered}
			        dataSource={this.state.data}
			        pagination={this.state.pagination}
			        loading={false}
			        onChange={this.handleTableChange.bind(this)}
	      		/>
      		</Content>

		);
	}
}