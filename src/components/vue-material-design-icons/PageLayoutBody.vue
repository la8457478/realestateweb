<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon page-layout-body-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,2H18C19.1,2 20,2.9 20,4V20C20,21.1 19.1,22 18,22H6C4.9,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2M6,8V16H18V8H6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PageLayoutBodyIcon",
  props: {
    title: {
      type: String,
      default: "Page Layout Body icon"
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
