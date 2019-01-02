<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-w-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,17C7.9,17 7,16.1 7,15V7H9V15H11V8H13V15H15V7H17V15C17,16.1 16.1,17 15,17H9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaWIcon",
  props: {
    title: {
      type: String,
      default: "Alpha W icon"
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
