<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon led-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,6C9.79,6 8,7.79 8,10V16H6V18H9V23H11V18H13V23H15V18H18V16H16V10C16,7.79 14.21,6 12,6M12,8C13.1,8 14,8.9 14,10V15H10V10C10,8.9 10.9,8 12,8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LedOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Led Outline icon"
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
