<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon plus-minus-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,3C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3H5M11,6H13V9H16V11H13V14H11V11H8V9H11V6M8,16H16V18H8V16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PlusMinusBoxIcon",
  props: {
    title: {
      type: String,
      default: "Plus Minus Box icon"
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
