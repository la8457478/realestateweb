<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-s-box-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,7H15V9H11V11H13C14.1,11 15,11.9 15,13V15C15,16.1 14.1,17 13,17H9V15H13V13H11C9.9,13 9,12.1 9,11V9C9,7.9 9.9,7 11,7M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M5,5V19H19V5H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaSBoxOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Alpha S Box Outline icon"
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
