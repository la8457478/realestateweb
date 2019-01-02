<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon skip-next-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SkipNextIcon",
  props: {
    title: {
      type: String,
      default: "Skip Next icon"
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
