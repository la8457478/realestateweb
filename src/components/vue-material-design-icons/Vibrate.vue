<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon vibrate-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16,19H8V5H16M16.5,3H7.5C6.67,3 6,3.67 6,4.5V19.5C6,20.33 6.67,21 7.5,21H16.5C17.33,21 18,20.33 18,19.5V4.5C18,3.67 17.33,3 16.5,3M19,17H21V7H19M22,9V15H24V9M3,17H5V7H3M0,15H2V9H0V15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "VibrateIcon",
  props: {
    title: {
      type: String,
      default: "Vibrate icon"
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
