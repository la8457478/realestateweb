<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon notification-clear-all-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,13H19V11H5M3,17H17V15H3M7,7V9H21V7">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NotificationClearAllIcon",
  props: {
    title: {
      type: String,
      default: "Notification Clear All icon"
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
