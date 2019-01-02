<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon npm-variant-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,3V21H21V3H3M6,6H18V18H15V9H12V18H6V6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NpmVariantOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Npm Variant Outline icon"
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
