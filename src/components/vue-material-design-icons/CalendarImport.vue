<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon calendar-import-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,12L8,16H11V22H13V16H16M19,4H18V2H16V4H8V2H6V4H5C3.9,4 3,4.9 3,6V20C3,21.1 3.9,22 5,22H9V20H5V9H19V20H15V22H19C20.1,22 21,21.1 21,20V6C21,4.9 20.1,4 19,4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CalendarImportIcon",
  props: {
    title: {
      type: String,
      default: "Calendar Import icon"
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
