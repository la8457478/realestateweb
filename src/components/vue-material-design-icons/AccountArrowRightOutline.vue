<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon account-arrow-right-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,21V19H15V17H19V15L22,18L19,21M13,18C13,18.71 13.15,19.39 13.42,20H2V17C2,14.79 5.58,13 10,13C11,13 11.96,13.09 12.85,13.26C13.68,13.42 14.44,13.64 15.11,13.92C13.83,14.83 13,16.32 13,18M4,17V18H11C11,16.96 11.23,15.97 11.64,15.08L10,15C6.69,15 4,15.9 4,17M10,4C12.21,4 14,5.79 14,8C14,10.21 12.21,12 10,12C7.79,12 6,10.21 6,8C6,5.79 7.79,4 10,4M10,6C8.9,6 8,6.9 8,8C8,9.1 8.9,10 10,10C11.1,10 12,9.1 12,8C12,6.9 11.1,6 10,6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AccountArrowRightOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Account Arrow Right Outline icon"
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
