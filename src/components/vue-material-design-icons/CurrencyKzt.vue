<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon currency-kzt-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,3H19V5H5V3M5,6H19V8H13V21H11V8H5V6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CurrencyKztIcon",
  props: {
    title: {
      type: String,
      default: "Currency Kzt icon"
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
