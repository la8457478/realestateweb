<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon camera-rear-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,6C10.89,6 10,5.1 10,4C10,2.9 10.9,2 12,2C13.09,2 14,2.9 14,4C14,5.1 13.1,6 12,6M17,0H7C5.9,0 5,0.9 5,2V16C5,17.1 5.9,18 7,18H17C18.1,18 19,17.1 19,16V2C19,0.9 18.1,0 17,0M14,20V22H19V20M10,20H5V22H10V24L13,21L10,18V20Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CameraRearIcon",
  props: {
    title: {
      type: String,
      default: "Camera Rear icon"
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
