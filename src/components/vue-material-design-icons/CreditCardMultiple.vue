<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon credit-card-multiple-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,8V6H7V8H21M21,16V11H7V16H21M21,4C22.1,4 23,4.9 23,6V16C23,17.1 22.1,18 21,18H7C5.89,18 5,17.1 5,16V6C5,4.89 5.89,4 7,4H21M3,20H18V22H3C1.9,22 1,21.1 1,20V9H3V20Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CreditCardMultipleIcon",
  props: {
    title: {
      type: String,
      default: "Credit Card Multiple icon"
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
