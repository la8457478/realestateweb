<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon view-sequential-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,4H21V8H3V4M3,10H21V14H3V10M3,16H21V20H3V16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ViewSequentialIcon",
  props: {
    title: {
      type: String,
      default: "View Sequential icon"
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
