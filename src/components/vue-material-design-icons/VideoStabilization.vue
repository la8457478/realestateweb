<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon video-stabilization-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4M4,6V18H20V6H4M7.24,6.58L18.83,9.69L16.76,17.42L5.17,14.31L7.24,6.58Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "VideoStabilizationIcon",
  props: {
    title: {
      type: String,
      default: "Video Stabilization icon"
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
