<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon rhombus-medium-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17.23,11.34L12.68,6.79C12.3,6.4 11.75,6.4 11.36,6.79L6.81,11.34C6.42,11.73 6.42,12.28 6.81,12.66L11.36,17.21C11.75,17.6 12.3,17.6 12.68,17.21L17.23,12.66C17.56,12.27 17.56,11.73 17.23,11.34Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RhombusMediumIcon",
  props: {
    title: {
      type: String,
      default: "Rhombus Medium icon"
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
