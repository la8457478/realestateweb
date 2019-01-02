<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon circle-small-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,10C10.9,10 10,10.9 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12C14,10.9 13.1,10 12,10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CircleSmallIcon",
  props: {
    title: {
      type: String,
      default: "Circle Small icon"
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
