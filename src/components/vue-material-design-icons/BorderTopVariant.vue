<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon border-top-variant-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,21H21V19H19M15,21H17V19H15M19,17H21V15H19M3,5H21V3H3M19,13H21V11H19M19,9H21V7H19M3,9H5V7H3M3,13H5V11H3M3,21H5V19H3M3,17H5V15H3M11,21H13V19H11M7,21H9V19H7V21Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BorderTopVariantIcon",
  props: {
    title: {
      type: String,
      default: "Border Top Variant icon"
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
