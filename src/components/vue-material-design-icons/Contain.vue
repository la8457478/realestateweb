<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon contain-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,3H8V5H4V19H8V21H2V3M7,17V15H9V17H7M11,17V15H13V17H11M15,17V15H17V17H15M22,3V21H16V19H20V5H16V3H22Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ContainIcon",
  props: {
    title: {
      type: String,
      default: "Contain icon"
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
