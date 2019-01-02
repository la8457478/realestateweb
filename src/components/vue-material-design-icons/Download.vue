<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon download-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DownloadIcon",
  props: {
    title: {
      type: String,
      default: "Download icon"
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
