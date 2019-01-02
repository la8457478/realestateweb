<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon color-helper-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M0,24H24V20H0V24Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ColorHelperIcon",
  props: {
    title: {
      type: String,
      default: "Color Helper icon"
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
