<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon led-variant-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,3C9.79,3 8,4.79 8,7V13H6V15H9V21H11V15H13V21H15V15H18V13H16V7C16,4.79 14.21,3 12,3M12,5C13.1,5 14,5.9 14,7V12H10V7C10,5.9 10.9,5 12,5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LedVariantOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Led Variant Outline icon"
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
