<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon numeric2-box-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,15H11V13H13C14.1,13 15,12.1 15,11V9C15,7.89 14.1,7 13,7H9V9H13V11H11C9.9,11 9,11.9 9,13V17H15M19,19H5V5H19M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Numeric2BoxOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Numeric2 Box Outline icon"
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
