<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon table-column-width-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,8H19C20.1,8 21,8.9 21,10V20C21,21.1 20.1,22 19,22H5C3.9,22 3,21.1 3,20V10C3,8.9 3.9,8 5,8M5,12V15H11V12H5M13,12V15H19V12H13M5,17V20H11V17H5M13,17V20H19V17H13M11,2H21V6H19V4H13V6H11V2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TableColumnWidthIcon",
  props: {
    title: {
      type: String,
      default: "Table Column Width icon"
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
