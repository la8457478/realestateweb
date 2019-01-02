<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon border-all-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,11H13V5H19M19,19H13V13H19M11,11H5V5H11M11,19H5V13H11M3,21H21V3H3V21Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BorderAllIcon",
  props: {
    title: {
      type: String,
      default: "Border All icon"
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
