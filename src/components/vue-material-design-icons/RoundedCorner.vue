<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon rounded-corner-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,19H21V21H19V19M19,17H21V15H19V17M3,13H5V11H3V13M3,17H5V15H3V17M3,9H5V7H3V9M3,5H5V3H3V5M7,5H9V3H7V5M15,21H17V19H15V21M11,21H13V19H11V21M15,21H17V19H15V21M7,21H9V19H7V21M3,21H5V19H3V21M21,8C21,5.24 18.76,3 16,3H11V5H16C17.66,5 19,6.34 19,8V13H21V8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RoundedCornerIcon",
  props: {
    title: {
      type: String,
      default: "Rounded Corner icon"
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
