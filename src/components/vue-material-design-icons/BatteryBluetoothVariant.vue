<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon battery-bluetooth-variant-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,2V4H7.33C6.6,4 6,4.6 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67C17.4,22 18,21.4 18,20.67V5.33C18,4.6 17.4,4 16.67,4H15V2H9M11.83,8H12.33L15.18,10.85L13.04,13L15.17,15.14L12.33,18H11.83V14.21L9.54,16.5L8.83,15.79L11.62,13L8.83,10.21L9.54,9.5L11.83,11.79V8M12.83,9.91V11.79L13.77,10.85L12.83,9.91M12.83,14.21V16.08L13.77,15.14L12.83,14.21Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BatteryBluetoothVariantIcon",
  props: {
    title: {
      type: String,
      default: "Battery Bluetooth Variant icon"
    },
    decorative: {
      type: Boolean,
      default: false
    },
    fillColor: {
      type: String,
      default: "currentColor"
    }
  }
}
</script>
