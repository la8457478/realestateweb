<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-c-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,7C9.9,7 9,7.9 9,9V15C9,16.1 9.9,17 11,17H13C14.1,17 15,16.1 15,15V14H13V15H11V9H13V10H15V9C15,7.9 14.1,7 13,7H11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaCIcon",
  props: {
    title: {
      type: String,
      default: "Alpha C icon"
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
