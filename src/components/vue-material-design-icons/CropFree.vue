<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon crop-free-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,3H15V5H19V9H21V5C21,3.89 20.1,3 19,3M19,19H15V21H19C20.1,21 21,20.1 21,19V15H19M5,15H3V19C3,20.1 3.9,21 5,21H9V19H5M3,5V9H5V5H9V3H5C3.9,3 3,3.9 3,5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CropFreeIcon",
  props: {
    title: {
      type: String,
      default: "Crop Free icon"
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
