<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon scanner-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4.2,10.7L19.8,5L20.5,6.9L6.4,12H19C20.1,12 21,12.9 21,14V18C21,19.1 20.1,20 19,20H5C3.9,20 3,19.1 3,18V12.5C3,11.7 3.5,10.9 4.2,10.7M17,17H19V15H17V17M5,17H15V15H5V17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ScannerIcon",
  props: {
    title: {
      type: String,
      default: "Scanner icon"
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
