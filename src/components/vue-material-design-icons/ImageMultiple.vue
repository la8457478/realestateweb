<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon image-multiple-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M22,16V4C22,2.9 21.1,2 20,2H8C6.9,2 6,2.9 6,4V16C6,17.1 6.9,18 8,18H20C21.1,18 22,17.1 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20C2,21.1 2.9,22 4,22H18V20H4V6">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ImageMultipleIcon",
  props: {
    title: {
      type: String,
      default: "Image Multiple icon"
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
