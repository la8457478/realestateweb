<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon garage-alert-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17,20H15V11H5V20H3V9L10,5L17,9V20M6,12H14V14H6V12M6,15H14V17H6V15M19,15V10H21V15H19M19,19V17H21V19H19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "GarageAlertIcon",
  props: {
    title: {
      type: String,
      default: "Garage Alert icon"
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
