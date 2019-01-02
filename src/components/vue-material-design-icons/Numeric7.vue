<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon numeric7-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,17L15,9V7H9V9H13L9,17">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Numeric7Icon",
  props: {
    title: {
      type: String,
      default: "Numeric7 icon"
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
