<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon network-strength-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M1,21H21V1M19,5.83V19H6">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NetworkStrengthOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Network Strength Outline icon"
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
