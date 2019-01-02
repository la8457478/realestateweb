<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-wrap-top-bottom-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,7L17,17H7L12,7M3,3H21V5H3V3M3,19H21V21H3V19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatWrapTopBottomIcon",
  props: {
    title: {
      type: String,
      default: "Format Wrap Top Bottom icon"
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
