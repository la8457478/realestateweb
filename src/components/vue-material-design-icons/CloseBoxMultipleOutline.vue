<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon close-box-multiple-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,17V3H7V17H21M21,1C22.1,1 23,1.9 23,3V17C23,18.1 22.1,19 21,19H7C5.9,19 5,18.1 5,17V3C5,1.9 5.9,1 7,1H21M3,5V21H19V23H3C1.9,23 1,22.1 1,21V5H3M17.6,15L14,11.4L10.4,15L9,13.6L12.6,10L9,6.4L10.4,5L14,8.6L17.6,5L19,6.4L15.4,10L19,13.6L17.6,15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CloseBoxMultipleOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Close Box Multiple Outline icon"
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
