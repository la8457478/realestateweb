<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon network-strength4-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M1,21H21V1">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NetworkStrength4Icon",
  props: {
    title: {
      type: String,
      default: "Network Strength4 icon"
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
