<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-m-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7C7.9,7 7,7.9 7,9V17H9V9H11V16H13V9H15V17H17V9C17,7.9 16.1,7 15,7H9M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaMBoxIcon",
  props: {
    title: {
      type: String,
      default: "Alpha M Box icon"
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
