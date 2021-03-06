function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import PickerSlot from './PickerSlot';

export default {
  name: 'mu-slide-picker',
  props: {
    visibleItemCount: {
      type: Number,
      default: 5
    },
    values: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    slots: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    change: function change(index, value) {
      this.$emit('change', value, index);
    }
  },
  render: function render(h) {
    var _this = this;

    return h('div', {
      staticClass: 'mu-slide-picker'
    }, [].concat(_toConsumableArray(this.slots.map(function (slot, index) {
      return h(PickerSlot, {
        props: {
          divider: slot.divider,
          content: slot.content,
          textAlign: slot.textAlign,
          width: slot.width,
          value: _this.values[index],
          values: slot.values,
          visibleItemCount: _this.visibleItemCount
        },
        key: 'picker-slot-item-' + index,
        on: {
          change: function change(value) {
            _this.change(index, value);
          }
        }
      });
    })), [h('div', {
      staticClass: 'mu-slide-picker-center-highlight'
    })]));
  }
};