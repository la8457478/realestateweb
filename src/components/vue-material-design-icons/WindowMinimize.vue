<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon window-minimize-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,14H4V10H20">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "WindowMinimizeIcon",
  props: {
    title: {
      type: String,
      default: "Window Minimize icon"
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
