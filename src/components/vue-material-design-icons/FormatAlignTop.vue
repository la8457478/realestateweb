<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-align-top-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,15L15.5,17.5L16.92,16.08L12,11.16L7.08,16.08L8.5,17.5L11,15V21H13V15M3,3H21V5H3V3M3,7H13V9H3V7Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatAlignTopIcon",
  props: {
    title: {
      type: String,
      default: "Format Align Top icon"
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
