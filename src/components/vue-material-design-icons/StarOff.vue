<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon star-off-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,5.27L3.28,4L20,20.72L18.73,22L17.05,20.31L12,17.27L5.82,21L7.45,13.97L2,9.24L5.66,8.93L2,5.27M12,2L14.81,8.62L22,9.24L16.54,13.97L16.77,14.95L9.56,7.74L12,2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "StarOffIcon",
  props: {
    title: {
      type: String,
      default: "Star Off icon"
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
