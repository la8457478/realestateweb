<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon battery-positive-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11.67,4C12.4,4 13,4.6 13,5.33V20.67C13,21.4 12.4,22 11.67,22H2.33C1.6,22 1,21.4 1,20.67V5.33C1,4.6 1.6,4 2.33,4H4V2H10V4H11.67M23,14H20V17H18V14H15V12H18V9H20V12H23V14M3,13H11V6H3V13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BatteryPositiveIcon",
  props: {
    title: {
      type: String,
      default: "Battery Positive icon"
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
