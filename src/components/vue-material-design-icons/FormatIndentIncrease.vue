<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-indent-increase-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M11,17H21V15H11M3,8V16L7,12M3,21H21V19H3V21Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatIndentIncreaseIcon",
  props: {
    title: {
      type: String,
      default: "Format Indent Increase icon"
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
