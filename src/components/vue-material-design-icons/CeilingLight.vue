<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon ceiling-light-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M8,9H11V4H13V9H16L20,17H4L8,9M14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18H14Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CeilingLightIcon",
  props: {
    title: {
      type: String,
      default: "Ceiling Light icon"
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
