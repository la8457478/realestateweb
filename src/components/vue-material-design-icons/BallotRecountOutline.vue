<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon ballot-recount-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,18H11V13H6V18M7,14H10V17H7V14M13,7.5H18V9.5H13V7.5M12.81,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V12.81C20.39,12.46 19.72,12.21 19,12.09V5H5V19H12.09C12.21,19.72 12.46,20.39 12.81,21M11,6H6V11H11V6M10,10H7V7H10V10M18,21.5C16.34,21.5 15,20.16 15,18.5C15,18 15.12,17.5 15.35,17.1L14.62,16.37C14.23,17 14,17.72 14,18.5C14,20.71 15.79,22.5 18,22.5V24L20,22L18,20M18,14.5V13L16,15L18,17V15.5C19.66,15.5 21,16.84 21,18.5C21,19 20.88,19.5 20.65,19.9L21.38,20.63C21.77,20 22,19.28 22,18.5C22,16.29 20.21,14.5 18,14.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BallotRecountOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Ballot Recount Outline icon"
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
