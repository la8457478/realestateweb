<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-d-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7V17H13C14.1,17 15,16.1 15,15V9C15,7.9 14.1,7 13,7H9M11,9H13V15H11V9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaDIcon",
  props: {
    title: {
      type: String,
      default: "Alpha D icon"
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
