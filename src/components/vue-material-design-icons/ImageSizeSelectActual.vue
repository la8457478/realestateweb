<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon image-size-select-actual-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,3H3C2,3 1,4 1,5V19C1,20.1 1.9,21 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ImageSizeSelectActualIcon",
  props: {
    title: {
      type: String,
      default: "Image Size Select Actual icon"
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
