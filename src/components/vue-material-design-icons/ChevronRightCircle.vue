<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon chevron-right-circle-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2C17.52,2 22,6.48 22,12M10,18L16,12L10,6L8.6,7.4L13.2,12L8.6,16.6L10,18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ChevronRightCircleIcon",
  props: {
    title: {
      type: String,
      default: "Chevron Right Circle icon"
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
