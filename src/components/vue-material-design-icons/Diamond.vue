<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon diamond-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,2L2,8L12,22L22,8L18,2H6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DiamondIcon",
  props: {
    title: {
      type: String,
      default: "Diamond icon"
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
