<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon star-box-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15.58,17L12,14.84L8.42,17L9.37,12.93L6.21,10.2L10.38,9.84L12,6L13.62,9.83L17.79,10.19L14.63,12.92L15.58,17M19,3C20.1,3 21,3.9 21,5V19C21,20.11 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19M5,5V19H19V5H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "StarBoxOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Star Box Outline icon"
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
