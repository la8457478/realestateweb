<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon numeric9-box-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,11H11V9H13M13,7H11C9.9,7 9,7.9 9,9V11C9,12.11 9.9,13 11,13H13V15H9V17H13C14.1,17 15,16.1 15,15V9C15,7.89 14.1,7 13,7M19,19H5V5H19M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Numeric9BoxOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Numeric9 Box Outline icon"
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
