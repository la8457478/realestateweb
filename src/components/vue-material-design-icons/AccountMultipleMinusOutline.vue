<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon account-multiple-minus-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,13C15,13 19,14 19,16V18H7V16C7,14 11,13 13,13M19.62,13.16C21.63,13.5 24,14.46 24,16V18H21V16C21,14.82 20.45,13.88 19.62,13.16M13,11C11.34,11 10,9.66 10,8C10,6.34 11.34,5 13,5C14.66,5 16,6.34 16,8C16,9.66 14.66,11 13,11M18,11C17.68,11 17.37,10.95 17.08,10.85C17.65,10.04 18,9.06 18,8C18,6.94 17.65,5.95 17.08,5.14C17.37,5.05 17.68,5 18,5C19.66,5 21,6.34 21,8C21,9.66 19.66,11 18,11M8,10V12H0V10H8M13,6.5C12.17,6.5 11.5,7.17 11.5,8C11.5,8.83 12.17,9.5 13,9.5C13.83,9.5 14.5,8.83 14.5,8C14.5,7.17 13.83,6.5 13,6.5M8.5,16.5H17.5V16C17.5,15.17 15.5,14.5 13,14.5C10.5,14.5 8.5,15.17 8.5,16V16.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AccountMultipleMinusOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Account Multiple Minus Outline icon"
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
