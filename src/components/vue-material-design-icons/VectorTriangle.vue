<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon vector-triangle-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,3V9H9.73L5.79,16H2V22H8V20H16V22H22V16H18.21L14.27,9H15V3M11,5H13V7H11M12,9.04L16,16.15V18H8V16.15M4,18H6V20H4M18,18H20V20H18">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "VectorTriangleIcon",
  props: {
    title: {
      type: String,
      default: "Vector Triangle icon"
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
