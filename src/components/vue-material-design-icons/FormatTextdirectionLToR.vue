<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-textdirection-l-to-r-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,18L17,14V17H5V19H17V22M9,10V15H11V4H13V15H15V4H17V2H9C6.79,2 5,3.79 5,6C5,8.21 6.79,10 9,10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatTextdirectionLToRIcon",
  props: {
    title: {
      type: String,
      default: "Format Textdirection L To R icon"
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
