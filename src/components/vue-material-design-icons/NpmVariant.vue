<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon npm-variant-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,4H4V20H12V8H16V20H20V4">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NpmVariantIcon",
  props: {
    title: {
      type: String,
      default: "Npm Variant icon"
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
