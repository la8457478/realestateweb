<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon forward-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,8V4L20,12L12,20V16H4V8H12Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ForwardIcon",
  props: {
    title: {
      type: String,
      default: "Forward icon"
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
