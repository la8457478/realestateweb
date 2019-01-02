<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon lamp-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M8,2H16L20,14H4L8,2M11,15H13V20H18V22H6V20H11V15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LampIcon",
  props: {
    title: {
      type: String,
      default: "Lamp icon"
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
