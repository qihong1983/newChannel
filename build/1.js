webpackJsonp([1],{

/***/ 1540:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _antd.Menu.SubMenu;
var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer,
    Sider = _antd.Layout.Sider;

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _antd.Layout,
        null,
        _react2.default.createElement(
          Header,
          { className: 'header', id: 'components-layout-demo-top-side' },
          _react2.default.createElement('div', { className: 'logo' }),
          _react2.default.createElement(
            _antd.Menu,
            {
              theme: 'dark',
              mode: 'horizontal',
              defaultSelectedKeys: ['1'],
              style: { lineHeight: '64px' }
            },
            _react2.default.createElement(
              _antd.Menu.Item,
              { key: '1' },
              _react2.default.createElement(
                _reactRouter.IndexLink,
                { to: '/data', activeClassName: 'active' },
                '\u6E20\u9053\u6570\u636E'
              )
            ),
            _react2.default.createElement(
              _antd.Menu.Item,
              { key: '2' },
              _react2.default.createElement(
                _reactRouter.IndexLink,
                { to: '/manager', activeClassName: 'active' },
                '\u6E20\u9053\u7BA1\u7406'
              )
            ),
            _react2.default.createElement(
              _antd.Menu.Item,
              { key: '3' },
              _react2.default.createElement(
                _reactRouter.IndexLink,
                { to: '/user', activeClassName: 'active' },
                '\u7528\u6237\u7BA1\u7406'
              )
            )
          )
        ),
        this.props.children,
        _react2.default.createElement(
          Footer,
          { style: { backgroundColor: 'white' } },
          'footer'
        )
      );
    }
  }]);

  return Main;
}(_react2.default.Component);

exports.default = Main;

/***/ })

});
//# sourceMappingURL=1.js.map?559011b3