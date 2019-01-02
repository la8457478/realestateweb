<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pause-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14,19H18V5H14M6,19H10V5H6V19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PauseIcon",
  props: {
    title: {
      type: String,
      default: "Pause icon"
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
