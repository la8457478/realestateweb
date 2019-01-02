<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon tie-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,2L10,6L7,17L12,22L17,17L14,6L18,2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TieIcon",
  props: {
    title: {
      type: String,
      default: "Tie icon"
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
