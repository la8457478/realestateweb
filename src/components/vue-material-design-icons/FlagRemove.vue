<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon flag-remove-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14.46,15.88L15.88,14.46L18,16.59L20.12,14.46L21.54,15.88L19.41,18L21.54,20.12L20.12,21.54L18,19.41L15.88,21.54L14.46,20.12L16.59,18L14.46,15.88M12.4,5H18V12C15.78,12 13.84,13.21 12.8,15H11L10.6,13H5V20H3V3H12L12.4,5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FlagRemoveIcon",
  props: {
    title: {
      type: String,
      default: "Flag Remove icon"
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
