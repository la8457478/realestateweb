<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon debug-step-out-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22M13,16H11V6L6.5,10.5L5.08,9.08L12,2.16L18.92,9.08L17.5,10.5L13,6V16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DebugStepOutIcon",
  props: {
    title: {
      type: String,
      default: "Debug Step Out icon"
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
