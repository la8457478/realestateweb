<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon apple-keyboard-shift-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,18V12H17.17L12,6.83L6.83,12H9V18H15M12,4L22,14H17V20H7V14H2L12,4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AppleKeyboardShiftIcon",
  props: {
    title: {
      type: String,
      default: "Apple Keyboard Shift icon"
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
