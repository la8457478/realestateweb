<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-columns-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,3H11V5H3V3M13,3H21V5H13V3M3,7H11V9H3V7M13,7H21V9H13V7M3,11H11V13H3V11M13,11H21V13H13V11M3,15H11V17H3V15M13,15H21V17H13V15M3,19H11V21H3V19M13,19H21V21H13V19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatColumnsIcon",
  props: {
    title: {
      type: String,
      default: "Format Columns icon"
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
