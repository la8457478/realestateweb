<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon import-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6C4.9,4 4,4.9 4,6V9H6V6H18V18H6V15H4V18C4,19.1 4.9,20 6,20H18C19.1,20 20,19.1 20,18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ImportIcon",
  props: {
    title: {
      type: String,
      default: "Import icon"
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
