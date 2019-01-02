<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon skip-backward-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,5V19L13,12M6,5V19H4V5M13,5V19L6,12">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SkipBackwardIcon",
  props: {
    title: {
      type: String,
      default: "Skip Backward icon"
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
