<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-d-box-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7H13C14.1,7 15,7.9 15,9V15C15,16.1 14.1,17 13,17H9V7M11,9V15H13V9H11M3,5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaDBoxOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Alpha D Box Outline icon"
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
