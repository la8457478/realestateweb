<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon stairs-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "StairsIcon",
  props: {
    title: {
      type: String,
      default: "Stairs icon"
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
