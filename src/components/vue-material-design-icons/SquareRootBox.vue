<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon square-root-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,3C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3H5M11.24,6H19V8H12.76L10,18H8L6.25,12H5V10H7.75L9,14.28L11.24,6V6M14,10.59L15.79,12.38L17.59,10.59L19,12L17.21,13.79L19,15.59L17.59,17L15.79,15.21L14,17L12.59,15.59L14.38,13.79L12.59,12L14,10.59Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SquareRootBoxIcon",
  props: {
    title: {
      type: String,
      default: "Square Root Box icon"
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
