<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon cellphone-message-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,17V7H4V17H11M11,3C12.1,3 13,3.9 13,5V19C13,20.1 12.1,21 11,21H4C2.89,21 2,20.1 2,19V5C2,3.9 2.9,3 4,3H11M16.5,3H21.5C22.33,3 23,3.67 23,4.5V7.5C23,8.33 22.33,9 21.5,9H18L15,12V9L15,4.5C15,3.67 15.67,3 16.5,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CellphoneMessageIcon",
  props: {
    title: {
      type: String,
      default: "Cellphone Message icon"
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
