<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon filter-variant-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FilterVariantIcon",
  props: {
    title: {
      type: String,
      default: "Filter Variant icon"
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
