<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon debug-step-over-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14M23.46,8.86L21.87,15.75L15,14.16L18.8,11.78C17.39,9.5 14.87,8 12,8C8.05,8 4.77,10.86 4.12,14.63L2.15,14.28C2.96,9.58 7.06,6 12,6C15.58,6 18.73,7.89 20.5,10.72L23.46,8.86Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DebugStepOverIcon",
  props: {
    title: {
      type: String,
      default: "Debug Step Over icon"
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
