<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-m-box-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7H15C16.1,7 17,7.9 17,9V17H15V9H13V16H11V9H9V17H7V9C7,7.9 7.9,7 9,7M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M5,5V19H19V5H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaMBoxOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Alpha M Box Outline icon"
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
