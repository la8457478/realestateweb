<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon battery-alert-bluetooth-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,2V4H3.33C2.6,4 2,4.6 2,5.33V20.67C2,21.4 2.6,22 3.33,22H12.67C13.4,22 14,21.4 14,20.67V5.33C14,4.6 13.4,4 12.67,4H11V2H5M19,8V11.79L16.71,9.5L16,10.21L18.79,13L16,15.79L16.71,16.5L19,14.21V18H19.5L22.35,15.14L20.21,13L22.35,10.85L19.5,8H19M7,9H9V14H7V9M20,9.91L20.94,10.85L20,11.79V9.91M20,14.21L20.94,15.14L20,16.08V14.21M7,16H9V18H7V16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BatteryAlertBluetoothIcon",
  props: {
    title: {
      type: String,
      default: "Battery Alert Bluetooth icon"
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
