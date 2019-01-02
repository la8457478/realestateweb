<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-pilcrow-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,11C7.79,11 6,9.21 6,7C6,4.79 7.79,3 10,3H18V5H16V21H14V5H12V21H10V11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatPilcrowIcon",
  props: {
    title: {
      type: String,
      default: "Format Pilcrow icon"
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
