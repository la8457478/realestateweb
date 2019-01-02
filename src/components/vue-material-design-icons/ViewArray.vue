<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon view-array-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M8,18H17V5H8M18,5V18H21V5M4,18H7V5H4V18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ViewArrayIcon",
  props: {
    title: {
      type: String,
      default: "View Array icon"
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
