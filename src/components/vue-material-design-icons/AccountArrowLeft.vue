<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon account-arrow-left-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18,21L15,18L18,15V17H22V19H18V21M10,4C12.21,4 14,5.79 14,8C14,10.21 12.21,12 10,12C7.79,12 6,10.21 6,8C6,5.79 7.79,4 10,4M10,14C11.15,14 12.25,14.12 13.24,14.34C12.46,15.35 12,16.62 12,18C12,18.7 12.12,19.37 12.34,20H2V18C2,15.79 5.58,14 10,14Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AccountArrowLeftIcon",
  props: {
    title: {
      type: String,
      default: "Account Arrow Left icon"
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
