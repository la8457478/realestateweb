<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pac-man-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,12L19.07,19.07C15.17,23 8.83,23 4.93,19.07C1,15.17 1,8.84 4.93,4.93C8.83,1 15.16,1 19.07,4.93L12,12M19,10C17.9,10 17,10.9 17,12C17,13.1 17.9,14 19,14C20.1,14 21,13.1 21,12C21,10.9 20.1,10 19,10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PacManIcon",
  props: {
    title: {
      type: String,
      default: "Pac Man icon"
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
