<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon store24-hour-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16,12H15V10H13V7H14V9H15V7H16M11,10H9V11H11V12H8V9H10V8H8V7H11M19,7V4H5V7H2V20H10V16H14V20H22V7H19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Store24HourIcon",
  props: {
    title: {
      type: String,
      default: "Store24 Hour icon"
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
