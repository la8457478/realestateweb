<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-m-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7C7.9,7 7,7.9 7,9V17H9V9H11V16H13V9H15V17H17V9C17,7.9 16.1,7 15,7H9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaMIcon",
  props: {
    title: {
      type: String,
      default: "Alpha M icon"
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
