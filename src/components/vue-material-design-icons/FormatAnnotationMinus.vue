<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-annotation-minus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10.5,7H8.5L3,21H5.2L6.3,18H12.5L13.6,21H16L10.5,7M7.1,16L9.5,9.7L11.9,16H7.1M22,7H14V5H22V7Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatAnnotationMinusIcon",
  props: {
    title: {
      type: String,
      default: "Format Annotation Minus icon"
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
