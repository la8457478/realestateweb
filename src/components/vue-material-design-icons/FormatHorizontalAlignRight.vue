<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-horizontal-align-right-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,8V11H3V13H13V16L17,12L13,8M19,20H21V4H19V20Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatHorizontalAlignRightIcon",
  props: {
    title: {
      type: String,
      default: "Format Horizontal Align Right icon"
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
