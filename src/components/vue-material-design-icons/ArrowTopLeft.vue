<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon arrow-top-left-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,17.59L17.59,19L7,8.41V15H5V5H15V7H8.41L19,17.59Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrowTopLeftIcon",
  props: {
    title: {
      type: String,
      default: "Arrow Top Left icon"
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
