<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon send-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SendIcon",
  props: {
    title: {
      type: String,
      default: "Send icon"
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
