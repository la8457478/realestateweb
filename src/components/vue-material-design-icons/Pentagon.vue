<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pentagon-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,2.5L2,9.8L5.8,21.5H18.2L22,9.8L12,2.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PentagonIcon",
  props: {
    title: {
      type: String,
      default: "Pentagon icon"
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
