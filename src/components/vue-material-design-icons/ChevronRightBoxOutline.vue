<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon chevron-right-box-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19M8.29,16.59L12.88,12L8.29,7.41L9.71,6L15.71,12L9.71,18L8.29,16.59Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ChevronRightBoxOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Chevron Right Box Outline icon"
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
