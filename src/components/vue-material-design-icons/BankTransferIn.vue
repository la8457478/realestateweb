<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon bank-transfer-in-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,15V12H5V10L9,13.5L5,17V15H2M22,8.7V10H10V8.7L16,5L22,8.7M10,17H22V19H10V17M15,11H17V16H15V11M11,11H13V16H11V11M19,11H21V16H19V11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BankTransferInIcon",
  props: {
    title: {
      type: String,
      default: "Bank Transfer In icon"
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
