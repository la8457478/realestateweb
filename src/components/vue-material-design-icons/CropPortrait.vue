<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon crop-portrait-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17,19H7V5H17M17,3H7C5.9,3 5,3.9 5,5V19C5,20.1 5.9,21 7,21H17C18.1,21 19,20.1 19,19V5C19,3.89 18.1,3 17,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CropPortraitIcon",
  props: {
    title: {
      type: String,
      default: "Crop Portrait icon"
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
