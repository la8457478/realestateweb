<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon augmented-reality-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,3C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3H5M7.75,9H9.25L11,15H9.5L9.21,14H7.79L7.5,15H6L7.75,9M13,9H16.5C17.35,9 18,9.65 18,10.5V11.5C18,12.1 17.6,12.65 17.1,12.9L18,15H16.5L15.65,13H14.5V15H13V9M14.5,10.5V11.5H16.5V10.5H14.5M8.5,11.57L8.23,12.5H8.77L8.5,11.57Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AugmentedRealityIcon",
  props: {
    title: {
      type: String,
      default: "Augmented Reality icon"
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
