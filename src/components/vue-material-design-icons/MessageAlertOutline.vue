<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon message-alert-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,10H11V6H13V10M13,12H11V14H13V12M22,4V16C22,17.1 21.1,18 20,18H6L2,22V4C2,2.9 2.9,2 4,2H20C21.1,2 22,2.9 22,4M20,4H4V17.2L5.2,16H20V4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MessageAlertOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Message Alert Outline icon"
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
