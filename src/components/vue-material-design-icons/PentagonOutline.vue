<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pentagon-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,5L19.6,10.5L16.7,19.4H7.3L4.4,10.5L12,5M12,2.5L2,9.8L5.8,21.5H18.1L22,9.8L12,2.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PentagonOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Pentagon Outline icon"
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
