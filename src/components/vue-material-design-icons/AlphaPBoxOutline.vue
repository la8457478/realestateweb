<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-p-box-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7H13C14.1,7 15,7.9 15,9V11C15,12.1 14.1,13 13,13H11V17H9V7M11,9V11H13V9H11M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M5,5V19H19V5H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaPBoxOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Alpha P Box Outline icon"
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
