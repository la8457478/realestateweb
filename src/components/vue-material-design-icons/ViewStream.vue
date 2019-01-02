<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon view-stream-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,5V11H21V5M4,18H21V12H4V18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ViewStreamIcon",
  props: {
    title: {
      type: String,
      default: "View Stream icon"
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
