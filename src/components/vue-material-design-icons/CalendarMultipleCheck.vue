<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon calendar-multiple-check-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,17V8H7V17H21M21,3C22.1,3 23,3.9 23,5V17C23,18.1 22.1,19 21,19H7C5.89,19 5,18.1 5,17V5C5,3.9 5.9,3 7,3H8V1H10V3H18V1H20V3H21M17.53,11.06L13.09,15.5L10.41,12.82L11.47,11.76L13.09,13.38L16.47,10L17.53,11.06M3,21H17V23H3C1.89,23 1,22.1 1,21V9H3V21Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CalendarMultipleCheckIcon",
  props: {
    title: {
      type: String,
      default: "Calendar Multiple Check icon"
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
