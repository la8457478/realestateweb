<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-header-equal-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,4H6V10H10V4H12V18H10V12H6V18H4V4M14,10V8H21V10H14M14,12H21V14H14V12Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatHeaderEqualIcon",
  props: {
    title: {
      type: String,
      default: "Format Header Equal icon"
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
