<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon label-off-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,4.27L3.28,3L20,19.72L18.73,21L16.63,18.9C16.43,18.96 16.22,19 16,19H5C3.9,19 3,18.1 3,17V7C3,6.5 3.17,6.07 3.46,5.73L2,4.27M17.63,5.84L22,12L19,16.2L7.83,5H16C16.67,5 17.27,5.33 17.63,5.84Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LabelOffIcon",
  props: {
    title: {
      type: String,
      default: "Label Off icon"
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
