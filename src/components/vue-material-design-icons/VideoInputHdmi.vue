<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon video-input-hdmi-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18,7V4C18,2.9 17.1,2 16,2H8C6.9,2 6,2.9 6,4V7H5V13L8,19V22H16V19L19,13V7H18M8,4H16V7H14V5H13V7H11V5H10V7H8V4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "VideoInputHdmiIcon",
  props: {
    title: {
      type: String,
      default: "Video Input Hdmi icon"
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
