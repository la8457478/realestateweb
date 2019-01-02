<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon power-socket-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,15H17V11H15M7,15H9V11H7M11,13H13V9H11M8.83,7H15.2L19,10.8V17H5V10.8M8,5L3,10V19H21V10L16,5H8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PowerSocketIcon",
  props: {
    title: {
      type: String,
      default: "Power Socket icon"
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
