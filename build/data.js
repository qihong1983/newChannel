webpackJsonp([3],{

/***/ 1537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(75);

var _reactRouter = __webpack_require__(135);

var _navlink = __webpack_require__(657);

var _navlink2 = _interopRequireDefault(_navlink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _antd.Menu.SubMenu;
var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Sider = _antd.Layout.Sider;

var Data = function (_React$Component) {
	_inherits(Data, _React$Component);

	function Data(props) {
		_classCallCheck(this, Data);

		var _this = _possibleConstructorReturn(this, (Data.__proto__ || Object.getPrototypeOf(Data)).call(this, props));

		_this.state = {
			currentPage: "/data/userprofile"
		};
		return _this;
	}

	_createClass(Data, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			console.log(this.props.location.pathname, 'aaaaa');
			this.setState({
				currentPage: this.props.location.pathname
			}, function () {
				// alert(this.state.currentPage);
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {

			console.log('^^^^');
		}
	}, {
		key: 'urlGetL',
		value: function urlGetL() {}
	}, {
		key: 'render',
		value: function render() {

			console.log(this.state.currentPage, 'asdf');

			console.log(window.location.pathname);
			// this.setState({
			// 	currentPage: window.location.pathname
			// });
			// var dash = this.props.chilren || <ChannelDashboard />;
			return _react2.default.createElement(
				_antd.Layout,
				null,
				_react2.default.createElement(
					Sider,
					{ width: 200, style: { background: '#fff' } },
					_react2.default.createElement(
						_antd.Menu,
						{
							mode: 'inline',
							defaultSelectedKeys: [window.location.hash],
							style: { height: '100%', borderRight: 0 }
						},
						_react2.default.createElement(
							_antd.Menu.Item,
							{ key: '#/data/userprofile' },
							_react2.default.createElement(
								_reactRouter.IndexLink,
								{ to: '/data/userprofile', activeClassName: 'active' },
								_react2.default.createElement(_antd.Icon, { type: 'team' }),
								'\u7528\u6237\u6982\u51B5'
							)
						),
						_react2.default.createElement(
							_antd.Menu.Item,
							{ key: '/data/kpireport' },
							_react2.default.createElement(
								_reactRouter.IndexLink,
								{ to: '/data/kpireport', activeClassName: 'active' },
								_react2.default.createElement(_antd.Icon, { type: 'shop' }),
								'KPI\u62A5\u8868'
							)
						)
					)
				),
				_react2.default.createElement(
					_antd.Layout,
					{ style: { padding: '0 0px 24px' } },
					this.props.children
				)
			);
		}
	}]);

	return Data;
}(_react2.default.Component);

exports.default = Data;

/***/ })

});
//# sourceMappingURL=data.js.map?5528bf0e