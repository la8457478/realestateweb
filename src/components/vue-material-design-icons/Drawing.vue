<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon drawing-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M8.5,3C11.54,3 14,5.46 14,8.5C14,9.83 13.53,11.05 12.74,12H21V21H12V12.74C11.05,13.53 9.83,14 8.5,14C5.46,14 3,11.54 3,8.5C3,5.46 5.46,3 8.5,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DrawingIcon",
  props: {
    title: {
      type: String,
      default: "Drawing icon"
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
