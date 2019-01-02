<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon exclamation-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ExclamationIcon",
  props: {
    title: {
      type: String,
      default: "Exclamation icon"
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
