<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon chevron-down-circle-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2C17.52,2 22,6.48 22,12M6,10L12,16L18,10L16.6,8.6L12,13.2L7.4,8.6L6,10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ChevronDownCircleIcon",
  props: {
    title: {
      type: String,
      default: "Chevron Down Circle icon"
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
