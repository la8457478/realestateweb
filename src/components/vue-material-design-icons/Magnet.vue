<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon magnet-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,7V13C3,17.97 7.03,22 12,22C16.97,22 21,17.97 21,13V7H17V13C17,15.76 14.76,18 12,18C9.24,18 7,15.76 7,13V7M17,5H21V2H17M3,5H7V2H3">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MagnetIcon",
  props: {
    title: {
      type: String,
      default: "Magnet icon"
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
