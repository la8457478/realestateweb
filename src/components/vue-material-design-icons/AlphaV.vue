<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-v-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7L11,17H13L15,7H13L12,12L11,7H9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaVIcon",
  props: {
    title: {
      type: String,
      default: "Alpha V icon"
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
