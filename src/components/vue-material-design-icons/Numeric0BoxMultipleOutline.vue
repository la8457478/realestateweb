<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon numeric0-box-multiple-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,17V3H7V17H21M21,1C22.1,1 23,1.9 23,3V17C23,18.1 22.1,19 21,19H7C5.9,19 5,18.1 5,17V3C5,1.9 5.9,1 7,1H21M3,5V21H19V23H3C1.9,23 1,22.1 1,21V5H3M13,5H15C16.1,5 17,5.9 17,7V13C17,14.1 16.1,15 15,15H13C11.9,15 11,14.1 11,13V7C11,5.9 11.9,5 13,5M13,7V13H15V7H13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Numeric0BoxMultipleOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Numeric0 Box Multiple Outline icon"
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
