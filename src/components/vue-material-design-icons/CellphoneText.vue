<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon cellphone-text-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17,19V5H7V19H17M17,1C18.1,1 19,1.9 19,3V21C19,22.1 18.1,23 17,23H7C5.89,23 5,22.1 5,21V3C5,1.89 5.89,1 7,1H17M9,7H15V9H9V7M9,11H13V13H9V11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CellphoneTextIcon",
  props: {
    title: {
      type: String,
      default: "Cellphone Text icon"
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
