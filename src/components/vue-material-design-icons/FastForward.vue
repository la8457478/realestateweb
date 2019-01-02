<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon fast-forward-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FastForwardIcon",
  props: {
    title: {
      type: String,
      default: "Fast Forward icon"
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
