<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon file-delimited-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20C20,21.1 19.1,22 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M14,15V11H10V15H12.3C12.6,17 12,18 9.7,19.38L10.85,20.2C13,19 14,16 14,15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FileDelimitedIcon",
  props: {
    title: {
      type: String,
      default: "File Delimited icon"
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
