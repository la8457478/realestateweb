<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon seat-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,5V12H9V5H15M15,3H9C7.9,3 7,3.9 7,5V14H17V5C17,3.9 16.1,3 15,3M22,10H19V13H22V10M5,10H2V13H5V10M20,15H4V21H6V17H18V21H20V15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SeatOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Seat Outline icon"
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
