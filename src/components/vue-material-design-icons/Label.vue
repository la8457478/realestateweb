<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon label-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17.63,5.84C17.27,5.33 16.67,5 16,5H5C3.9,5 3,5.9 3,7V17C3,18.1 3.9,19 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LabelIcon",
  props: {
    title: {
      type: String,
      default: "Label icon"
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
