<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-title-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,4V7H10.5V19H13.5V7H19V4H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatTitleIcon",
  props: {
    title: {
      type: String,
      default: "Format Title icon"
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
