<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon checkerboard-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,3H21V21H3V3M5,5V12H12V19H19V12H12V5H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CheckerboardIcon",
  props: {
    title: {
      type: String,
      default: "Checkerboard icon"
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
