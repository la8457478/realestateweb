<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon currency-twd-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,11H21V13H15V19H21V21H15C13.9,21 13,20.1 13,19V13H10.35L5.73,21L4,20L8.04,13H3V11M5,3H19V5H5V3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CurrencyTwdIcon",
  props: {
    title: {
      type: String,
      default: "Currency Twd icon"
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
