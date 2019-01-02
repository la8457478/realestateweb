<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-z-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7V9H13L9,15V17H15V15H11L15,9V7H9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaZIcon",
  props: {
    title: {
      type: String,
      default: "Alpha Z icon"
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
