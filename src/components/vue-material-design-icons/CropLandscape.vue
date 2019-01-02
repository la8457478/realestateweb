<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon crop-landscape-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,17H5V7H19M19,5H5C3.9,5 3,5.9 3,7V17C3,18.1 3.9,19 5,19H19C20.1,19 21,18.1 21,17V7C21,5.89 20.1,5 19,5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CropLandscapeIcon",
  props: {
    title: {
      type: String,
      default: "Crop Landscape icon"
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
