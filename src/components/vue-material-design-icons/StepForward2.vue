<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon step-forward2-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,5H10V19H7V5M12,5L23,12L12,19V5M2,5H5V19H2V5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "StepForward2Icon",
  props: {
    title: {
      type: String,
      default: "Step Forward2 icon"
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
