<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon window-maximize-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,4H20V20H4V4M6,8V18H18V8H6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "WindowMaximizeIcon",
  props: {
    title: {
      type: String,
      default: "Window Maximize icon"
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
