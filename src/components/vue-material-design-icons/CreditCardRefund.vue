<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon credit-card-refund-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18,11H6C4.9,11 4,11.9 4,13V21C4,22.1 4.9,23 6,23H18C19.1,23 20,22.1 20,21V13C20,11.9 19.1,11 18,11M18,21H6V17H18V21M18,15H6V13H18V15M17,5V10H15.5V6.5H9.88L12.3,8.93L11.24,10L7,5.75L11.24,1.5L12.3,2.57L9.88,5H17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CreditCardRefundIcon",
  props: {
    title: {
      type: String,
      default: "Credit Card Refund icon"
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
