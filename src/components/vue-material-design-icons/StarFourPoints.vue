<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon star-four-points-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "StarFourPointsIcon",
  props: {
    title: {
      type: String,
      default: "Star Four Points icon"
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
