<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon arrow-bottom-right-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,6.41L6.41,5L17,15.59V9H19V19H9V17H15.59L5,6.41Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrowBottomRightIcon",
  props: {
    title: {
      type: String,
      default: "Arrow Bottom Right icon"
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
