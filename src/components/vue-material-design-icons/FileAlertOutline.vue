<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon file-alert-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,18H8V16H10V18M10,14H8V9H10V14M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M18,20H6V4H13V9H18V20Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FileAlertOutlineIcon",
  props: {
    title: {
      type: String,
      default: "File Alert Outline icon"
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
