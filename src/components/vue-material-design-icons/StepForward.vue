<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon step-forward-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,5V19H8V5M10,5V19L21,12">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "StepForwardIcon",
  props: {
    title: {
      type: String,
      default: "Step Forward icon"
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
