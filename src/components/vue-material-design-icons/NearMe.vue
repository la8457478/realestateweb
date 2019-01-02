<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon near-me-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,3L3,10.53V11.5L9.84,14.16L12.5,21H13.46L21,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NearMeIcon",
  props: {
    title: {
      type: String,
      default: "Near Me icon"
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
