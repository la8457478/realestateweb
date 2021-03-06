var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { props, generatePropsClass } from './utils';
export default {
  name: 'mu-flex',
  functional: true,
  props: _extends({
    tag: String,
    inline: Boolean
  }, props),
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var flexClass = generatePropsClass(props);
    data.staticClass = (props.inline ? 'd-inline-flex' : 'd-flex') + ' ' + flexClass + ' ' + (data.staticClass || '');
    return h(props.tag || 'div', data, children);
  }
};