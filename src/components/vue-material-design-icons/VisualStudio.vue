<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon visual-studio-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17,8.5L12.25,12.32L17,16V8.5M4.7,18.4L2,16.7V7.7L5,6.7L9.3,10.03L18,2L22,4.5V20L17,22L9.34,14.66L4.7,18.4M5,14L6.86,12.28L5,10.5V14Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "VisualStudioIcon",
  props: {
    title: {
      type: String,
      default: "Visual Studio icon"
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
