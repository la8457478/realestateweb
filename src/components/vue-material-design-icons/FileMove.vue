<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon file-move-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14,17H18V14L23,18.5L18,23V20H14V17M13,9H18.5L13,3.5V9M6,2H14L20,8V12.34C19.37,12.12 18.7,12 18,12C14.69,12 12,14.69 12,18C12,19.54 12.58,20.94 13.53,22H6C4.89,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FileMoveIcon",
  props: {
    title: {
      type: String,
      default: "File Move icon"
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
