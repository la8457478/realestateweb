<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-underline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,21H19V19H5V21M12,17C15.31,17 18,14.31 18,11V3H15.5V11C15.5,12.93 13.93,14.5 12,14.5C10.07,14.5 8.5,12.93 8.5,11V3H6V11C6,14.31 8.69,17 12,17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatUnderlineIcon",
  props: {
    title: {
      type: String,
      default: "Format Underline icon"
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
