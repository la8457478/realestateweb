<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon seat-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,18V21H7V18H17V21H20V15H4V18M19,10H22V13H19V10M2,10H5V13H2V10M17,13H7V5C7,3.9 7.9,3 9,3H15C16.1,3 17,3.9 17,5V13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SeatIcon",
  props: {
    title: {
      type: String,
      default: "Seat icon"
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
