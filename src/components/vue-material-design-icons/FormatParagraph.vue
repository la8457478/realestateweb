<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-paragraph-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,4C15.21,4 17,5.79 17,8C17,10.21 15.21,12 13,12H11V18H9V4H13M13,10C14.1,10 15,9.1 15,8C15,6.9 14.1,6 13,6H11V10H13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatParagraphIcon",
  props: {
    title: {
      type: String,
      default: "Format Paragraph icon"
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
