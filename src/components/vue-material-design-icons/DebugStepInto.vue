<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon debug-step-into-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22M13,2V13L17.5,8.5L18.92,9.92L12,16.84L5.08,9.92L6.5,8.5L11,13V2H13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DebugStepIntoIcon",
  props: {
    title: {
      type: String,
      default: "Debug Step Into icon"
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
