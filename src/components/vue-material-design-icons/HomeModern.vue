<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon home-modern-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,21V8C6,6.9 6.9,6 8,6L16,3V6C17.1,6 18,6.9 18,8V21H12V16H8V21H6M14,19H16V16H14V19M8,13H10V9H8V13M12,13H16V9H12V13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HomeModernIcon",
  props: {
    title: {
      type: String,
      default: "Home Modern icon"
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
