<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-b-box-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,10.5C15,11.3 14.3,12 13.5,12C14.3,12 15,12.7 15,13.5V15C15,16.1 14.1,17 13,17H9V7H13C14.1,7 15,7.9 15,9V10.5M13,15V13H11V15H13M13,11V9H11V11H13M3,5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaBBoxOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Alpha B Box Outline icon"
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
