<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon currency-ils-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M22,16C22,18.76 19.76,21 17,21H8V9H10V19H17C18.66,19 20,17.66 20,16V3H22V16M16,8V15H14V8C14,6.34 12.66,5 11,5H4V21H2V3H11C13.76,3 16,5.24 16,8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CurrencyIlsIcon",
  props: {
    title: {
      type: String,
      default: "Currency Ils icon"
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
