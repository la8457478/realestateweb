<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon finance-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,13H7V23H3V13M10,14H14V23H10V14M17,9H21V23H17V9M17,1H21V5H20V3.06L11.97,11.09L8,7.12L3.4,11.72L2.34,10.66L8,5L11.97,8.97L18.94,2H17V1Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FinanceIcon",
  props: {
    title: {
      type: String,
      default: "Finance icon"
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
