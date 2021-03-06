function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import color from '../internal/mixins/color';
import AbstractButton from '../internal/AbstractButton';

export default {
  name: 'mu-bottom-nav',
  mixins: [color],
  provide: function provide() {
    return {
      getBottomNavValue: this.getBottomNavValue,
      getBottomNavShift: this.getBottomNavShift,
      bottomNavItemClick: this.bottomNavItemClick,
      getDefaultVal: this.getDefaultVal,
      getActiveColor: this.getActiveColor
    };
  },

  props: {
    shift: Boolean,
    value: {}
  },
  data: function data() {
    return {
      activeValue: this.value || 0
    };
  },

  methods: {
    getBottomNavValue: function getBottomNavValue() {
      return this.activeValue;
    },
    getBottomNavShift: function getBottomNavShift() {
      return this.shift;
    },
    getDefaultVal: function getDefaultVal() {
      if (!this.index) this.index = 0;
      return this.index++;
    },
    getActiveColor: function getActiveColor() {
      return {
        className: this.getNormalColorClass(this.color, true),
        color: this.getColor(this.color)
      };
    },
    bottomNavItemClick: function bottomNavItemClick(value) {
      this.activeValue = value;
    }
  },
  watch: {
    value: function value(val) {
      this.activeValue = val;
    },
    activeValue: function activeValue(val) {
      if (val === this.value) return;
      this.$emit('update:value', val);
      this.$emit('change', val);
    }
  },
  render: function render(h) {
    return h(AbstractButton, {
      class: _defineProperty({
        'mu-bottom-nav': true,
        'mu-bottom-nav-shift': this.shift
      }, this.getColorClass(false), this.shift),
      style: {
        'background-color': this.shift ? this.getColor(this.color) : ''
      },
      props: {
        ripple: this.shift,
        wrapperClass: 'mu-bottom-nav-shift-wrapper',
        containerElement: 'div',
        rippleOpacity: 0.3
      }
    }, this.$slots.default);
  }
};