<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon test-tube-empty-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,2H17V4H16V18C16,20.21 14.21,22 12,22C9.79,22 8,20.21 8,18V4H7V2M14,4H10V18C10,19.1 10.9,20 12,20C13.1,20 14,19.1 14,18V4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TestTubeEmptyIcon",
  props: {
    title: {
      type: String,
      default: "Test Tube Empty icon"
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
