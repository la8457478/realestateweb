<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-k-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7V17H11V13.67L13,17H15L12,12L15,7H13L11,10.33V7H9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaKIcon",
  props: {
    title: {
      type: String,
      default: "Alpha K icon"
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
