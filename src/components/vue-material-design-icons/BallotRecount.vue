<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon ballot-recount-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,17H7V14H10V17M10,7H7V10H10V7M12.81,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V12.81C20.12,12.3 19.09,12 18,12C14.69,12 12,14.69 12,18C12,19.09 12.3,20.12 12.81,21M13,9.5H18V7.5H13V9.5M11,13H6V18H11V13M11,6H6V11H11V6M18,21.5C16.34,21.5 15,20.16 15,18.5C15,18 15.12,17.5 15.35,17.1L14.62,16.37C14.23,17 14,17.72 14,18.5C14,20.71 15.79,22.5 18,22.5V24L20,22L18,20M18,14.5V13L16,15L18,17V15.5C19.66,15.5 21,16.84 21,18.5C21,19 20.88,19.5 20.65,19.9L21.38,20.63C21.77,20 22,19.28 22,18.5C22,16.29 20.21,14.5 18,14.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BallotRecountIcon",
  props: {
    title: {
      type: String,
      default: "Ballot Recount icon"
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
