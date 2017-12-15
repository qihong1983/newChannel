webpackJsonp([0],{

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function toQueryString(obj) {
	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];
		if (Array.isArray(val)) {
			return val.sort().map(function (val2) {
				return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
			}).join('&');
		}
		return encodeURIComponent(key) + '=' + encodeURIComponent(val);
	}).join('&') : '';
}

var list = exports.list = function list(token, props) {

	return function (dispatch) {
		fetch("http://127.0.0.1:3001/user_profile_list?appCode=" + props.os + "&online=1", {
			method: 'GET',
			mode: 'cors',
			cache: 'default',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Bearer ' + token
			}

		}).then(function (res) {
			res.json().then(function (res) {
				if (res.status) {

					var objectArr = [];
					var i = 0;
					res.data.map(function (v, k) {
						console.log(v, k);
						v.key = i++;
						objectArr.push(v);
					});

					console.log(objectArr);

					dispatch({
						type: "tableList",
						payload: objectArr
					});
				} else {
					if (res.msg == -1) {
						alert(-1);
						props.router.push('/login');
					}
				}
			});
		}.bind(this));
	}.bind(undefined);
};

var leftNav = exports.leftNav = function leftNav(token, props) {

	return function (dispatch) {
		dispatch({
			type: "urlpa",
			payload: window.location.pathname
		});
	}.bind(undefined);
};

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(305);

var _reactRouter = __webpack_require__(135);

var _navlink = __webpack_require__(657);

var _navlink2 = _interopRequireDefault(_navlink);

var _antd = __webpack_require__(75);

var _moment = __webpack_require__(4);

var _moment2 = _interopRequireDefault(_moment);

var _nprogress = __webpack_require__(87);

var _nprogress2 = _interopRequireDefault(_nprogress);

var _redux = __webpack_require__(156);

var _reactCookies = __webpack_require__(319);

var _reactCookies2 = _interopRequireDefault(_reactCookies);

var _list = __webpack_require__(774);

var actionCreators = _interopRequireWildcard(_list);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthPicker = _antd.DatePicker.MonthPicker,
    RangePicker = _antd.DatePicker.RangePicker;


var dateFormat = 'YYYY/MM/DD';
var monthFormat = 'YYYY/MM';

var SubMenu = _antd.Menu.SubMenu;
var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer,
    Sider = _antd.Layout.Sider;


var FormItem = _antd.Form.Item;
var Option = _antd.Select.Option;

var thunk = __webpack_require__(650).default;

// import * as actionCreators from './actions';

var userProfile = function (_React$Component) {
	_inherits(userProfile, _React$Component);

	function userProfile(props) {
		_classCallCheck(this, userProfile);

		return _possibleConstructorReturn(this, (userProfile.__proto__ || Object.getPrototypeOf(userProfile)).call(this, props));
	}

	_createClass(userProfile, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_nprogress2.default.start();

			var token = _reactCookies2.default.load('token');
			if (token) {
				this.props.list(token, this.props);
			} else {
				this.props.router.push('/login');
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_nprogress2.default.done();
		}
	}, {
		key: 'handleChange',
		value: function handleChange(value) {
			// console.log(value);
		}
	}, {
		key: 'render',
		value: function render() {

			var searchData = [{
				value: 1,
				text: "qihong1"
			}, {
				value: 2,
				text: "qihong2"
			}];

			var fetching = false;

			var options = searchData.map(function (d) {
				return _react2.default.createElement(
					Option,
					{ key: d.text },
					d.text
				);
			});

			var columns = [{
				title: '日期',
				dataIndex: 'date',
				key: 'date'
			}, {
				title: '新增用户',
				dataIndex: 'newUsers',
				key: 'newUsers'
			}, {
				title: '活跃用户',
				dataIndex: 'activeUser',
				key: 'activeUser'
			}, {
				title: '操作',
				dataIndex: 'oprations',
				key: 'oprations',
				render: function render(text, record) {
					return _react2.default.createElement(
						_reactRouter.Link,
						{ to: { pathname: "/data/userprofile/" + record.key }, key: record.key, activeClassName: 'active' },
						'\u7F16\u8F91',
						record.key
					);
				}
			}];

			// console.log(this.props.tableList, 'this.props.list');

			var tableList = this.props.tableList;

			// console.log(this.props, '###@@');

			// console.log(dataSource, '@@@##');
			// console.log(this.props, 'asdfasdfasdfas');
			// console.log(this.props.aReducer.list, 'this.props.aReducer.list');


			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					Content,
					{ style: { background: '#fff', padding: 24, margin: 0 } },
					_react2.default.createElement(
						_antd.Form,
						{ layout: 'inline' },
						_react2.default.createElement(
							FormItem,
							{ label: '\u64CD\u4F5C\u7CFB\u7EDF' },
							_react2.default.createElement(
								_antd.Select,
								{
									placeholder: 'Select a option and change input text above',
									dropdownMatchSelectWidth: true,
									defaultValue: '',
									style: { width: "100px" } },
								_react2.default.createElement(
									Option,
									{ value: '' },
									'\u5168\u90E8'
								),
								_react2.default.createElement(
									Option,
									{ value: '24' },
									'Android'
								),
								_react2.default.createElement(
									Option,
									{ value: '27' },
									'iOS'
								)
							)
						),
						_react2.default.createElement(
							FormItem,
							{ label: '\u7EBF\u4E0A\\\u7EBF\u4E0B' },
							_react2.default.createElement(
								_antd.Select,
								{
									placeholder: 'Select a option and change input text above',
									dropdownMatchSelectWidth: true,
									defaultValue: '',
									style: { width: '100px' } },
								_react2.default.createElement(
									Option,
									{ value: '' },
									'\u5168\u90E8'
								),
								_react2.default.createElement(
									Option,
									{ value: '1' },
									'\u7EBF\u4E0A'
								),
								_react2.default.createElement(
									Option,
									{ value: '2' },
									'\u7EBF\u4E0B'
								)
							)
						),
						_react2.default.createElement(
							FormItem,
							{ label: '\u6E20\u9053\u7EC4' },
							_react2.default.createElement(
								_antd.Select,
								{
									showSearch: true,
									placeholder: '\u641C\u7D22\u6E20\u9053\u7EC4',
									dropdownMatchSelectWidth: true,
									defaultValue: '',
									style: { width: '160px' },
									optionFilterProp: 'children',
									onChange: this.handleChange.bind(this) },
								_react2.default.createElement(
									Option,
									{ value: '' },
									'\u5168\u90E8'
								),
								_react2.default.createElement(
									Option,
									{ value: '1' },
									'samsung_total_news'
								),
								_react2.default.createElement(
									Option,
									{ value: '2' },
									'kp_total_news'
								),
								_react2.default.createElement(
									Option,
									{ value: '3' },
									'oppo_total_news'
								)
							)
						),
						_react2.default.createElement(
							FormItem,
							{ label: '' },
							_react2.default.createElement(
								_antd.Select,
								{
									mode: 'combobox',
									placeholder: '\u641C\u7D22\u6E20\u9053\u540D\u79F0',
									notFoundContent: '',
									style: { width: "100px" },
									defaultActiveFirstOption: false,
									showArrow: false,
									filterOption: false
								},
								options
							)
						),
						_react2.default.createElement(
							FormItem,
							{ label: '' },
							_react2.default.createElement(RangePicker, { size: 'large',
								defaultValue: [(0, _moment2.default)('2015/01/01', dateFormat), (0, _moment2.default)('2015/01/01', dateFormat)],
								format: dateFormat,
								style: { width: "260px" }
							})
						),
						_react2.default.createElement(
							_antd.Button,
							{ size: 'large', type: 'primary' },
							'\u67E5\u8BE2'
						)
					)
				),
				_react2.default.createElement(
					Content,
					{ style: { background: '#fff', padding: "24px", margin: 24, marginTop: "24px", minHeight: 280 } },
					_react2.default.createElement(_antd.Table, { dataSource: this.props.tableList, columns: columns })
				)
			);
		}
	}]);

	return userProfile;
}(_react2.default.Component);

//将state.counter绑定到props的counter


var mapStateToProps = function mapStateToProps(state) {

	console.log(state, 'statestate');
	return {
		tableList: state.userProfile.List.tableList,
		os: state.userProfile.List.os
	};
};
//将action的所有方法绑定到props上
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {

	//全量
	return (0, _redux.bindActionCreators)(actionCreators, dispatch);

	// return {
	// 	init: bindActionCreators({
	// 		addTodo
	// 	}, dispatch),
	// 	init2: bindActionCreators({
	// 		init2
	// 	}, dispatch)
	// }
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(userProfile);

/***/ })

});
//# sourceMappingURL=0.js.map?3f9e8a46