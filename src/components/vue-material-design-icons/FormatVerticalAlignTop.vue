<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-vertical-align-top-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M8,11H11V21H13V11H16L12,7L8,11M4,3V5H20V3H4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatVerticalAlignTopIcon",
  props: {
    title: {
      type: String,
      default: "Format Vertical Align Top icon"
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
