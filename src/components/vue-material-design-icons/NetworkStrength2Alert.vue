<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon network-strength2-alert-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,1L1,21H17V19H13V11.83L19,5.83V7H21M19,9V17H21V9M19,19V21H21V19">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NetworkStrength2AlertIcon",
  props: {
    title: {
      type: String,
      default: "Network Strength2 Alert icon"
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
