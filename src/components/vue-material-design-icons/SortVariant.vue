<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon sort-variant-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,13H15V11H3M3,6V8H21V6M3,18H9V16H3V18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SortVariantIcon",
  props: {
    title: {
      type: String,
      default: "Sort Variant icon"
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
