<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon arrow-bottom-left-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrowBottomLeftIcon",
  props: {
    title: {
      type: String,
      default: "Arrow Bottom Left icon"
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
