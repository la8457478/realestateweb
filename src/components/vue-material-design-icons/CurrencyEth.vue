<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon currency-eth-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,5H18V7H6M7,11H17V13H7M5.5,17H18.5V19H5.5">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CurrencyEthIcon",
  props: {
    title: {
      type: String,
      default: "Currency Eth icon"
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
