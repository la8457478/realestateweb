<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon compass-off-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M1,3.5L2.28,2.25L21.75,21.72L20.5,23L17.7,20.22C16.08,21.34 14.12,22 12,22C6.48,22 2,17.52 2,12C2,9.88 2.66,7.92 3.78,6.3L1,3.5M6,18L12.47,15L9,11.53L6,18M18,6L11.56,9L6.33,3.76C7.94,2.65 9.9,2 12,2C17.52,2 22,6.48 22,12C22,14.1 21.35,16.06 20.24,17.67L15,12.44L18,6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CompassOffIcon",
  props: {
    title: {
      type: String,
      default: "Compass Off icon"
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
