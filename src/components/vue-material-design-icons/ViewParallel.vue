<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon view-parallel-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,21V3H8V21H4M10,21V3H14V21H10M16,21V3H20V21H16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ViewParallelIcon",
  props: {
    title: {
      type: String,
      default: "View Parallel icon"
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
