<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon code-greater-than-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10.41,7.41L15,12L10.41,16.6L9,15.18L12.18,12L9,8.82M5,3C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CodeGreaterThanIcon",
  props: {
    title: {
      type: String,
      default: "Code Greater Than icon"
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
