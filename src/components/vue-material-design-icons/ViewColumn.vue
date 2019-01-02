<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon view-column-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16,5V18H21V5M4,18H9V5H4M10,18H15V5H10V18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ViewColumnIcon",
  props: {
    title: {
      type: String,
      default: "View Column icon"
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
