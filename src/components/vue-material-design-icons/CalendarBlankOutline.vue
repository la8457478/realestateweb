<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon calendar-blank-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,4H18V2H16V4H8V2H6V4H5C3.89,4 3,4.9 3,6V20C3,21.1 3.9,22 5,22H19C20.1,22 21,21.1 21,20V6C21,4.9 20.1,4 19,4M19,20H5V10H19V20M19,8H5V6H19V8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CalendarBlankOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Calendar Blank Outline icon"
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
