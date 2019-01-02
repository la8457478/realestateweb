<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon angle-right-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,4H7V11H13V17H20V19H5V4M7,17H11V13H7V17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AngleRightIcon",
  props: {
    title: {
      type: String,
      default: "Angle Right icon"
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
