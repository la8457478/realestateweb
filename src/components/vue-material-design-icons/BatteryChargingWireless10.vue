<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon battery-charging-wireless10-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20.07,4.93L18.66,6.34C21.79,9.46 21.79,14.53 18.66,17.66L20.07,19.07C23.97,15.17 23.97,8.84 20.07,4.93M17.24,7.76L15.83,9.17C17.39,10.73 17.39,13.26 15.83,14.83L17.24,16.24C19.58,13.9 19.58,10.1 17.24,7.76M13,4H11V2H5V4H3C2.45,4 2,4.45 2,5V21C2,21.55 2.45,22 3,22H13C13.55,22 14,21.55 14,21V5C14,4.45 13.55,4 13,4M12,18.5H4V6H12V18.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BatteryChargingWireless10Icon",
  props: {
    title: {
      type: String,
      default: "Battery Charging Wireless10 icon"
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
