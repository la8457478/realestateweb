<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon battery-charging30-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,15H4V6H12M12.67,4H11V2H5V4H3.33C2.6,4 2,4.6 2,5.33V20.67C2,21.4 2.6,22 3.33,22H12.67C13.4,22 14,21.4 14,20.67V5.33C14,4.6 13.4,4 12.67,4M23,11H20V4L15,14H18V22L23,11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BatteryCharging30Icon",
  props: {
    title: {
      type: String,
      default: "Battery Charging30 icon"
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
