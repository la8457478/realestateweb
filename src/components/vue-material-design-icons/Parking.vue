<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon parking-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13.2,11H10V7H13.2C14.3,7 15.2,7.9 15.2,9C15.2,10.1 14.3,11 13.2,11M13,3H6V21H10V15H13C16.31,15 19,12.31 19,9C19,5.68 16.31,3 13,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ParkingIcon",
  props: {
    title: {
      type: String,
      default: "Parking icon"
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
