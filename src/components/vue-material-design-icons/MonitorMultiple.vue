<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon monitor-multiple-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M22,17V7H6V17H22M22,5C23.1,5 24,5.9 24,7V17C24,18.11 23.1,19 22,19H16V21H18V23H10V21H12V19H6C4.89,19 4,18.11 4,17V7C4,5.9 4.9,5 6,5H22M2,3V15H0V3C0,1.9 0.9,1 2,1H20V3H2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MonitorMultipleIcon",
  props: {
    title: {
      type: String,
      default: "Monitor Multiple icon"
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
