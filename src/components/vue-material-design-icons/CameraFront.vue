<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon camera-front-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,2H17V12.5C17,10.83 13.67,10 12,10C10.33,10 7,10.83 7,12.5M17,0H7C5.9,0 5,0.9 5,2V16C5,17.1 5.9,18 7,18H17C18.1,18 19,17.1 19,16V2C19,0.9 18.1,0 17,0M12,8C13.1,8 14,7.1 14,6C14,4.9 13.1,4 12,4C10.9,4 10,4.9 10,6C10,7.1 10.9,8 12,8M14,20V22H19V20M10,20H5V22H10V24L13,21L10,18V20Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CameraFrontIcon",
  props: {
    title: {
      type: String,
      default: "Camera Front icon"
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
