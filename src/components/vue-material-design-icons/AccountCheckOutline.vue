<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon account-check-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21.1,12.5L22.5,13.91L15.97,20.5L12.5,17L13.9,15.59L15.97,17.67L21.1,12.5M11,4C13.21,4 15,5.79 15,8C15,10.21 13.21,12 11,12C8.79,12 7,10.21 7,8C7,5.79 8.79,4 11,4M11,6C9.9,6 9,6.9 9,8C9,9.1 9.9,10 11,10C12.1,10 13,9.1 13,8C13,6.9 12.1,6 11,6M11,13C11.68,13 12.5,13.09 13.41,13.26L11.74,14.93L11,14.9C8.03,14.9 4.9,16.36 4.9,17V18.1H11.1L13,20H3V17C3,14.34 8.33,13 11,13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AccountCheckOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Account Check Outline icon"
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
