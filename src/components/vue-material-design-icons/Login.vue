<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon login-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19C20.1,2 21,2.9 21,4V20C21,21.1 20.1,22 19,22H10C8.9,22 8,21.1 8,20V18H10V20H19V4H10V6H8V4C8,2.9 8.9,2 10,2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LoginIcon",
  props: {
    title: {
      type: String,
      default: "Login icon"
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
