<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon fast-forward-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,9.9L18,12L15,14.1V9.9M6,9.9L9,12L6,14.1V9.9M13,6V18L21.5,12L13,6M4,6V18L12.5,12L4,6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FastForwardOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Fast Forward Outline icon"
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
