<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon calendar-alert-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,1V3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3H18V1H16V3H8V1H6M5,7H19V19H5V7M11,8V13H13V8H11M11,15V17H13V15H11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CalendarAlertIcon",
  props: {
    title: {
      type: String,
      default: "Calendar Alert icon"
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
