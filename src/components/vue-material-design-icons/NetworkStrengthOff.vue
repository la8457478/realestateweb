<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon network-strength-off-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,1L12.4,9.6L21,18.19M4.77,4.5L3.5,5.77L9.86,12.13L1,21H18.73L20.73,23L22,21.73">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NetworkStrengthOffIcon",
  props: {
    title: {
      type: String,
      default: "Network Strength Off icon"
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
