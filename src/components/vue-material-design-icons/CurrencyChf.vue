<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon currency-chf-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,3H18V5H9V11H17V13H9V16H11V18H9V21H7V18H5V16H7V3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CurrencyChfIcon",
  props: {
    title: {
      type: String,
      default: "Currency Chf icon"
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
