<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon arrow-expand-up-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,20V22H22V20H13V5.83L18.5,11.33L19.92,9.92L12,2L4.08,9.92L5.5,11.33L11,5.83V20H2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrowExpandUpIcon",
  props: {
    title: {
      type: String,
      default: "Arrow Expand Up icon"
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
