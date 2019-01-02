<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon network-strength2-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M1,21H21V1M19,5.83V19H13V11.83">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NetworkStrength2Icon",
  props: {
    title: {
      type: String,
      default: "Network Strength2 icon"
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
