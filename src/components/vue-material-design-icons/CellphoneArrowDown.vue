<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon cellphone-arrow-down-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17,1H7C5.9,1 5,1.9 5,3V21C5,22.1 5.9,23 7,23H17C18.1,23 19,22.1 19,21V3C19,1.9 18.1,1 17,1M17,19H7V5H17V19M16,13H13V8H11V13H8L12,17L16,13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CellphoneArrowDownIcon",
  props: {
    title: {
      type: String,
      default: "Cellphone Arrow Down icon"
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
