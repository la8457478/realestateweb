<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon cash-refund-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,11H21V23H3V11M12,15C13.1,15 14,15.9 14,17C14,18.1 13.1,19 12,19C10.9,19 10,18.1 10,17C10,15.9 10.9,15 12,15M7,13C7,14.1 6.1,15 5,15V19C6.1,19 7,19.9 7,21H17C17,19.9 17.9,19 19,19V15C17.9,15 17,14.1 17,13H7M17,5V10H15.5V6.5H9.88L12.3,8.93L11.24,10L7,5.75L11.24,1.5L12.3,2.57L9.88,5H17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CashRefundIcon",
  props: {
    title: {
      type: String,
      default: "Cash Refund icon"
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
