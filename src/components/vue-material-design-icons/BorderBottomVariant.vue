<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon border-bottom-variant-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,15H3V17H5M3,21H21V19H3M5,11H3V13H5M19,9H21V7H19M19,5H21V3H19M5,7H3V9H5M19,17H21V15H19M19,13H21V11H19M17,3H15V5H17M13,3H11V5H13M5,3H3V5H5M9,3H7V5H9">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BorderBottomVariantIcon",
  props: {
    title: {
      type: String,
      default: "Border Bottom Variant icon"
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
