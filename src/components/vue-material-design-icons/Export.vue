<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon export-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M23,12L19,8V11H10V13H19V16M1,18V6C1,4.89 1.9,4 3,4H15C16.1,4 17,4.9 17,6V9H15V6H3V18H15V15H17V18C17,19.1 16.1,20 15,20H3C1.9,20 1,19.1 1,18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ExportIcon",
  props: {
    title: {
      type: String,
      default: "Export icon"
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
