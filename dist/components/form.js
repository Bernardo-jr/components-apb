function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import { Component } from 'react';
import './form.css';

var FormAPB = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FormAPB, _Component);

  function FormAPB(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      form: {}
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = FormAPB.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.props.formComponents.forEach(function (e) {
      var aux = _this2.state.form;
      aux[e.label] = '';

      _this2.setState({
        form: aux
      });
    });
    console.log(this.state);
  };

  _proto.handleChange = function handleChange(e, l, v) {
    var aux = this.state.form;
    if (e.target.type === 'radio') aux[l] = v;else if (e.target.type === 'checkbox') aux[l] = e.target.checked;else aux[l] = e.target.value;
    this.setState({
      form: aux
    });
  };

  _proto.handleSubmit = function handleSubmit(e, callback) {
    e.preventDefault();
    callback(this.state.form);
  };

  _proto.handleClick = function handleClick(e, callback, params) {
    var _this3 = this;

    if (callback === null) {
      this.props.formComponents.forEach(function (e) {
        var aux = _this3.state.form;
        aux[e.label] = '';

        _this3.setState({
          form: aux
        });
      });
      document.getElementById("form").reset();
    } else {
      if (params === null) {
        callback();
      } else {
        var args = [];
        params.forEach(function (e) {
          return args[e] = _this3.state.form[e];
        });
        callback(args);
      }
    }
  };

  _proto.render = function render() {
    var _this4 = this;

    return /*#__PURE__*/React.createElement("form", {
      id: "form"
    }, this.props.formComponents.map(function (element, key) {
      return /*#__PURE__*/React.createElement("div", {
        key: key
      }, /*#__PURE__*/React.createElement("label", {
        className: element.labelClass
      }, element.label, ":"), element.etiqueta === "select" ? /*#__PURE__*/React.createElement("select", {
        className: element.class,
        defaultValue: "X",
        onChange: function onChange(evt) {
          return _this4.handleChange(evt, element.label);
        }
      }, /*#__PURE__*/React.createElement("option", {
        value: "X",
        disabled: true
      }, "Seleccione"), element.options.map(function (opt, key) {
        return /*#__PURE__*/React.createElement("option", {
          key: key,
          value: opt.value
        }, opt.label);
      })) : element.type === 'radio' ? element.options.map(function (opt, key) {
        return /*#__PURE__*/React.createElement("label", {
          key: key,
          className: opt.labelClass
        }, opt.label, /*#__PURE__*/React.createElement("input", {
          className: opt.class,
          type: element.type,
          name: element.name,
          onChange: function onChange(evt) {
            return _this4.handleChange(evt, element.label, opt.value);
          }
        }));
      }) : /*#__PURE__*/React.createElement("input", {
        className: element.class,
        type: element.type,
        name: element.name,
        onChange: function onChange(evt) {
          return _this4.handleChange(evt, element.label);
        }
      }));
    }), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, this.props.buttons.map(function (button, key) {
      return button.submit ? /*#__PURE__*/React.createElement("button", {
        key: key,
        className: button.class,
        type: button.type,
        onClick: function onClick(evt) {
          return _this4.handleSubmit(evt, button.callback);
        }
      }, button.label) : /*#__PURE__*/React.createElement("button", {
        key: key,
        className: button.class,
        type: button.type,
        onClick: function onClick(evt) {
          return _this4.handleClick(evt, button.callback, button.callbackParams);
        }
      }, button.label);
    })));
  };

  return FormAPB;
}(Component);

export { FormAPB as default };