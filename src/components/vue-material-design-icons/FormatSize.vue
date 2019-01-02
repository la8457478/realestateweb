<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-size-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,12H6V19H9V12H12V9H3M9,4V7H14V19H17V7H22V4H9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatSizeIcon",
  props: {
    title: {
      type: String,
      default: "Format Size icon"
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
