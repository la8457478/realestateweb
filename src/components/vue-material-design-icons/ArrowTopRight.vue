<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon arrow-top-right-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrowTopRightIcon",
  props: {
    title: {
      type: String,
      default: "Arrow Top Right icon"
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
