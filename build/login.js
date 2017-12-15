webpackJsonp([1],{

/***/ 1539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _antd = __webpack_require__(75);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCookies = __webpack_require__(319);

var _reactCookies2 = _interopRequireDefault(_reactCookies);

var _nprogress = __webpack_require__(87);

var _nprogress2 = _interopRequireDefault(_nprogress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;

var Login = function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login(props) {
		_classCallCheck(this, Login);

		return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
	}

	_createClass(Login, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_nprogress2.default.start();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_reactCookies2.default.remove('token', {
				path: '/'
			});
			_nprogress2.default.done();
		}
	}, {
		key: 'toQueryString',
		value: function toQueryString(obj) {
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
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.preventDefault();

			this.props.form.validateFields(function (err, values) {

				if (!err) {
					console.log('Received values of form: ', values);
				} else {
					console.log(values, '成功');
				}
				fetch("http://127.0.0.1:3001/token", {
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					body: _this2.toQueryString({
						username: values.userName,
						password: values.password
					})
				}).then(function (res) {
					var _this3 = this;

					// res.status = 200;
					res.json().then(function (res) {

						if (res.status) {
							_reactCookies2.default.save('token', res.token, {
								path: '/'
							});

							//登录成功跳转到默认页面
							console.log(_this3.props.router.push('/data/userprofile'));
						} else {
							//todo 失败弹出层
						}
					});
				}.bind(_this2));
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var getFieldDecorator = this.props.form.getFieldDecorator;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_antd.Form,
					{ onSubmit: this.handleSubmit.bind(this), className: 'login-form' },
					_react2.default.createElement(
						FormItem,
						null,
						getFieldDecorator('userName', {
							rules: [{ required: true, message: 'Please input your username!' }]
						})(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'user', style: { fontSize: 13 } }), placeholder: 'Username' }))
					),
					_react2.default.createElement(
						FormItem,
						null,
						getFieldDecorator('password', {
							rules: [{ required: true, message: 'Please input your Password!' }]
						})(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'lock', style: { fontSize: 13 } }), type: 'password', placeholder: 'Password' }))
					),
					_react2.default.createElement(
						FormItem,
						null,
						getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true
						})(_react2.default.createElement(
							_antd.Checkbox,
							null,
							'Remember me'
						)),
						_react2.default.createElement(
							'a',
							{ className: 'login-form-forgot', href: '' },
							'Forgot password'
						),
						_react2.default.createElement(
							_antd.Button,
							{ type: 'primary', htmlType: 'submit', className: 'login-form-button' },
							'Log in'
						),
						'Or ',
						_react2.default.createElement(
							'a',
							{ href: '' },
							'register now!'
						)
					)
				)
			);
		}
	}]);

	return Login;
}(_react2.default.Component);

exports.default = Login = _antd.Form.create()(Login);

/***/ })

});
//# sourceMappingURL=login.js.map?da04fca6