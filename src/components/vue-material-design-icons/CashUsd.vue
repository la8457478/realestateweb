<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon cash-usd-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,18H4V6H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.89 21.1,4 20,4M11,17H13V16H14C14.55,16 15,15.55 15,15V12C15,11.45 14.55,11 14,11H11V10H15V8H13V7H11V8H10C9.45,8 9,8.45 9,9V12C9,12.55 9.45,13 10,13H13V14H9V16H11V17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CashUsdIcon",
  props: {
    title: {
      type: String,
      default: "Cash Usd icon"
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
