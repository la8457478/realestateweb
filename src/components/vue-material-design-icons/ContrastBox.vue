<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon contrast-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17,15.5H12V17H17M19,19H5L19,5M5.5,7.5H7.5V5.5H9V7.5H11V9H9V11H7.5V9H5.5M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ContrastBoxIcon",
  props: {
    title: {
      type: String,
      default: "Contrast Box icon"
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
